/* import ButtonComponent from '@/components/ButtonComponent';
import InputField from '@/components/InputField';
import React, { useState } from 'react'

const Questions = () => {

    const [qaArray, setQaArray] = useState([
        { question1: '', question2: '', question3: '', question4: '', answer: '' }
      ]);
    
      const handleInputChange = (index, field, value) => {
        const newQaArray = [...qaArray];
        newQaArray[index][field] = value;
        setQaArray(newQaArray);
      };
    
      const addNewEntry = () => {
        setQaArray([
          ...qaArray,
          { question1: '', question2: '', question3: '', question4: '', answer: '' }
        ]);
      };
    
      const handleSave = () => {
        console.log('Saved Entries:', qaArray);
        
      };
    
  return (
    <div className='w-full h-full flex flex-col'>
       <div className="bg-white flex justify-between w-full border-b p-5">
        <p className="text-[#252525] text-[16px] font-semibold">Questions</p>
      </div>
         <div className='h-full p-[20px]'>
         <div className="w-full space-y-3 mt-5">
         {qaArray.map((entry, index) => (
        <div key={index} className='border border-[#f1f1f1] px-3 py-1 rounded-[15px]' >
          <h3 className='mb-1.5'>Quiz Question {index + 1}</h3>
          {['question1', 'question2', 'question3', 'question4', 'answer'].map((field) => (
            <div key={field} >
              <InputField
                
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                type="text"
                value={entry[field]}
                onChange={(e) => handleInputChange(index, field, e.target.value)}
              />
            </div>
          ))}
        </div>
      ))}
         </div>

         <div className='flex space-x-2 px-7 my-7'>
            <ButtonComponent onClick={addNewEntry} title="Add New Entry" />
            <ButtonComponent onClick={handleSave} title="Save All Entries" />
        </div>
    </div>

    
    </div>
  )
}

export default Questions */

import ButtonComponent from '@/components/ButtonComponent';
import InputField from '@/components/InputField';
import TextField from '@/components/TextField';
import { useQuizStore } from '@/store/quizStore';
import { BookIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SingleQuestion = ({quizPayload}) => {
    const {createQuestion, successQuestion, getQuestion, singleQuestionData, updateQuestion} = useQuizStore()
    const navigate = useNavigate();

  const [totalQuestions, setTotalQuestions] = useState(quizPayload?.number_of_questions); // Set your desired number of questions here
  const [quiz, setQuiz] = useState(
    Array.from({ length: totalQuestions }, () => ({
      question: "", option_1: "",  option_2: "", option_3: "", option_4: "", answer: ""
    }))
  );

  useEffect(()=>{
    getQuestion({id: quizPayload?._id})
    //getQuestion({id: '6761a074327cc595f6f6664f'})
  },[])

  console.log("QUESTION LIST", quizPayload?.quiz_id)
  console.log("SINGLE QUESTION ", singleQuestionData)

  

  const handleChange = (index, field, value) => {
    const updatedQuiz = [...quiz];
    updatedQuiz[index][field] = value;
    setQuiz(updatedQuiz);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await updateQuestion({ id:  singleQuestionData?._id, question: quiz})
  };

  /* useEffect(()=>{
  if(successQuestion){
   navigate('/quiz')
  }
  },[successQuestion])

 */

    
  return (
    <div className='h-full w-full box-border p-10'>


      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2'>
      {singleQuestionData?.question?.map((question, index) => (
        <div key={index} style={{   border: '1px solid #ccc' }} className='w-full rounded-md overflow-hidden'>
        <div className='w-full flex items-center bg-black p-2 space-x-2'>
         <span><BookIcon color="white" size={22} /></span>
         <h3 className=' text-white w-full'>Question {index + 1}</h3>
         </div>
            <div className='p-3'>
            <InputField
              type="text"
              placeholder={`Question ${index + 1}`}
              containerStyle="mb-2"
              value={question?.question}
              //onChange={(e) => handleChange(index, 'question', e.target.value)}
              onChange={(e) => handleChange(index, 'question', e.target.value)}
            />
          
            <InputField
              type="text"
              placeholder="Option 1"
              containerStyle="mb-2"
              value={question?.option_1}
              onChange={(e) => handleChange(index, 'option_1', e.target.value)}
            />
        
            <InputField
              type="text"
              placeholder="Option 2"
              containerStyle="mb-2"
              value={question?.option_2}
              onChange={(e) => handleChange(index, 'option_2', e.target.value)}
            />
          
            <InputField
              type="text"
              placeholder="Option 3"
              containerStyle="mb-2"
              value={question?.option_3}
              onChange={(e) => handleChange(index, 'option_3', e.target.value)}
            />
          
            <InputField
              type="text"
              placeholder="Option 4"
              containerStyle="mb-2"
              value={question?.option_4}
              onChange={(e) => handleChange(index, 'option_4', e.target.value)}
            />
          
            <InputField
              type="text"
              placeholder="Answer"
              value={question?.answer}
              onChange={(e) => handleChange(index, 'answer', e.target.value)}
            />
            </div>
        </div>
      ))}
      </div>
      

      

    <div className='py-7'><ButtonComponent title="Save All Entries" onClick={handleSubmit} buttonStyle="w-[200px]"  /></div>
    </div>
  )
}

export default SingleQuestion