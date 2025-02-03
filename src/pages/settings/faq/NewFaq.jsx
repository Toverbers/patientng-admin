import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import TextField from '@/components/TextField'
import { useFaqStore } from '@/store/faqStore'
import React, { useState } from 'react'

const NewFaq = () => {
  const {createFaq} = useFaqStore()
  const [question, setQuestion] = useState()
  const [answer, setAnswer] = useState()

  const handleCreateFaq = async () => {
    await createFaq({question: question, answer: answer})
  }
  return (
    <>
     <div>
        <InputField placeholder="Question" value={question} onChange={(e)=> setQuestion(e.target.value)} />
        <TextField placeholder="Answer here" value={answer} onChange={(e)=> setAnswer(e.target.value)} />
        <ButtonComponent 
        onClick={handleCreateFaq}
        title="CreatE FAQ"
        buttonStyle="w-auto px-10" 
        />
     </div>
    </>
  )
}

export default NewFaq