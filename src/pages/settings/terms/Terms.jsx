import ButtonComponent from '@/components/ButtonComponent'
import TextEditor from '@/components/TextEditor'
import { useWebsiteStore } from '@/store/websiteStore'
import  { useState } from 'react'

const Terms = () => {
    const {updateTerms} = useWebsiteStore()
    const [terms, setTerms] = useState()

    const handleTerms =  async () =>{
        await updateTerms({content: terms})
       }
  return (
    <div className='mt-5 pb-20'>
      <div className='flex flex-col space-y-3'>
      <ButtonComponent
        onClick={handleTerms}
        title="Publish"
        buttonStyle="w-auto px-10" 
        />
      <div className='space-y-2 mb-20 box-border overflow-auto'>
        <h3 className='text-3xl font-medium my-5'>Terms and Conditions</h3>
        <TextEditor
              value={terms}
              onChange={setTerms}
            />
        </div>
      
      </div>
    </div>
  )
}

export default Terms