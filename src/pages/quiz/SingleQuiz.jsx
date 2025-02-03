import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import ModalComponent from '@/components/ModalComponent'
import SelectInput from '@/components/SelectInput'
import TextField from '@/components/TextField'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useQuizStore } from '@/store/quizStore'
import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import BackButton from '@/components/BackButton'
import { useLocation } from 'react-router-dom'
import { BookIcon } from 'lucide-react'
import SingleQuestion from './SingleQuestion'

const SingleQuiz = () => {

  const {createQuiz, quizDetails, updateQuiz} = useQuizStore()

  const [quizTitle, setQuizTitle] = useState('')
  const [quizDescription, setQuizDescription] = useState('')
  const [noOfQuestions, setNoOfQuestions] = useState('')
  const [noOfAttempt, setNoOfAttempt] = useState('')
  const [openQuestion, setOpenQuestion] = useState(false)

  const location = useLocation();
 const data = location.state

 console.log("QUIZ DETAILS", data?.info)

 useEffect(()=>{
   if(data?.info){
    setQuizTitle(data?.info?.title)
    setNoOfQuestions(data?.info?.number_of_questions)
    setNoOfAttempt(data?.info?.number_of_questions)
    setQuizDescription(data?.info?.description)
   }
  },[data?.info])

  


  const handleCreateQuiz = async () => {
    await updateQuiz({id: data?.info?._id,title: quizTitle, description: quizDescription, number_of_questions: noOfQuestions, number_of_attempt: noOfAttempt})
  }

  const handleOpenQuestion = async () => {
    setOpenQuestion(true)
  }



  console.log("MAIN QUIZ DETAILS", quizDetails)
  console.log("QUIZ QUESTION", data.info.questions[0])

  return (
    <div className="bg-[#FAFBFC] w-full flex flex-col h-full">
            <div className="bg-white flex items-center p-5 border-b">
              <BackButton />
              <p className="text-[#252525] text-[16px] font-semibold">
                Quiz Information
              </p>
              
            </div>

            {/* <div className="p-3 space-y-2 grow overflow-y-auto w-full">
              {onNext ? <QuizQuestions /> : <QuizInfo />}
            </div> */}

<div className='px-[20px]'>
<div className="border rounded-xl p-3 bg-white h-full mt-5">
      <InputField title="Quiz Title" placeholder="Enter quiz title" value={quizTitle} onChange={(e) => setQuizTitle(e.target.value)} />
      <TextField
        title="Quiz Description"
        placeholder="Enter quiz description"
        value={quizDescription} onChange={(e) => setQuizDescription(e.target.value)}
      />

      <div className="flex space-x-3 items-center w-full">
        <InputField type="number" title="No of questions" placeholder="Enter no of questions" value={noOfQuestions} onChange={(e) => setNoOfQuestions(e.target.value)} />
       <InputField type="number" title="Nu of attempts" placeholder="Enter nu of attempts" value={noOfAttempt} onChange={(e) => setNoOfAttempt(e.target.value)} />
      </div>

      <div className="bg-white flex space-x-2 justify-between w-full py-1 mt-5">
        <ButtonComponent title="Update Quiz" onClick={handleCreateQuiz} />
      </div>

      {/* <div className="flex space-x-3 items-center w-full">
          <Select className="" 
                value="Points"
                >
              <SelectTrigger className="h-[50px]">
                <SelectValue placeholder="select Reawrd Type"></SelectValue>
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Points">Points</SelectItem> 
              <SelectItem value="Item">Item</SelectItem> 
              </SelectContent>
            </Select>

            <Select className="" 
            defaultValue="points"
                value="Points"
                
                >
              <SelectTrigger className="h-[50px]">
                <SelectValue placeholder="select Reawrd Value"></SelectValue>
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Points">Ball</SelectItem> 
              <SelectItem value="Item">Viju milk pack</SelectItem> 
              </SelectContent>
            </Select>
      </div> */}

    
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 mt-7'>
    {data.info.questions[0].question?.map((item, index) => (
     <>
      <div key={index} className='border space-y-1 rounded-md overflow-hidden box-border'>
      <p className='border p-2 text-white bg-black'>Question {index +1}</p>
      <p className='border p-2'>{item.question}</p>
      <p className='border p-2'>{item.option_1}</p>
      <p className='border p-2'>{item.option_2}</p>
      <p className='border p-2'>{item.option_3}</p>
      <p className='border p-2'>{item.option_4}</p>
      <p className='border p-2'>{item.answer}</p>
      </div>
     </>
    ))}
    </div>
    
    
    <div className="bg-white flex space-x-2 justify-end w-full py-1 mt-3">
      <ButtonComponent onClick={handleOpenQuestion} title="Update Questions"  />
    </div>

    {/* <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2'>
      {data.info.questions[0].question?.map((question, index) => (
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
             // onChange={(e) => handleChange(index, 'question', e.target.value)}
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
      </div> */}
    </div>
</div>



    <ModalComponent
      open={openQuestion}
      setOpen={()=>setOpenQuestion(false)}
      content={
        <><SingleQuestion quizPayload={data?.info?.questions[0]} />

        </>
      }
      />
  
</div>
  )
}

export default SingleQuiz