import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import ModalComponent from '@/components/ModalComponent'
import SelectInput from '@/components/SelectInput'
import TextField from '@/components/TextField'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useQuizStore } from '@/store/quizStore'
import React, { useState } from 'react'
import Questions from './Questions'
import BackButton from '@/components/BackButton'

const NewQuiz = () => {

  const {createQuiz, quizDetails} = useQuizStore()

  const [quizTitle, setQuizTitle] = useState('')
  const [quizDescription, setQuizDescription] = useState('')
  const [noOfQuestions, setNoOfQuestions] = useState('')
  const [noOfAttempt, setNoOfAttempt] = useState('')
  const [openQuestion, setOpenQuestion] = useState(false)

  const handleCreateQuiz = async () => {
    await createQuiz({title: quizTitle, description: quizDescription, number_of_questions: noOfQuestions, number_of_attempt: noOfAttempt})
  }

  const handleOpenQuestion = async () => {
    setOpenQuestion(true)
  }

  console.log("MAIN QUIZ DETAILS", quizDetails)

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

      <div className="flex space-x-3 items-center w-full">
      <Select className="" 
          //defaultValue={ChallengeRewardType}
                value="Points"
                //onValueChange={(value) => {setChallengeRewardType(value)}} 
                >
              <SelectTrigger className="h-[50px]">
                {/*  <SelectValue placeholder={category?.name} /> */}
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
                //</div>onValueChange={(value) => {setChallengeRewardValue(value)}} 
                >
              <SelectTrigger className="h-[50px]">
                {/*  <SelectValue placeholder={category?.name} /> */}
                <SelectValue placeholder="select Reawrd Value"></SelectValue>
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Points">Ball</SelectItem> 
              <SelectItem value="Item">Viju milk pack</SelectItem> 
              </SelectContent>
            </Select>
      </div>
    </div>
</div>

            
              
            
              {quizDetails?  <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
                <ButtonComponent onClick={handleOpenQuestion} title="Create Questions"  />
              </div> : <div className="bg-white flex space-x-2 justify-between w-full px-5 py-1 border-t mt-10">
                <ButtonComponent title="Create Quiz" onClick={handleCreateQuiz} />
              </div> }

              <ModalComponent
               open={openQuestion}
               setOpen={()=>setOpenQuestion(false)}
                content={
                  <><Questions quizPayload={quizDetails} />

                  </>
                }
               />
           
          </div>
  )
}

export default NewQuiz