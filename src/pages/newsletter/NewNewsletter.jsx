import BackButton from '@/components/BackButton'
import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import TextEditor from '@/components/TextEditor'
import { useNewsletterStore } from '@/store/newsletterStore'
import { useState } from 'react'

const NewNewsletter = () => {
    const [newsletterBody, setNewsletterBody] = useState('')
    const [newsletterName, setNewsletterName] = useState('')
    const [newsletterSubject, setNewsletterSubject] = useState('')
    const {createNewsletter} = useNewsletterStore()

    const handleNewNewsletter = async () =>{
        await createNewsletter({
            newsletter_name: newsletterName, 
            newsletter_subject: newsletterSubject, 
            newsletter_body: newsletterBody
        })
    }



  return (
    <div className="p-5 bg-[#FAFBFC] grow overflow-x-auto flex flex-col">
      <BackButton />
      <div className="flex space-x-2 mb-2">
        <p className="text-[#252525] text-[28px] font-semibold grow">
        Create new Newsletter
        </p>
      </div>
        <div>

        <InputField title="Newsletter Name" placeholder="Enter title" value={newsletterName} onChange={(e) => setNewsletterName(e.target.value)} />
        <InputField title="Newsletter Subject" placeholder="Enter title" value={newsletterSubject} onChange={(e) => setNewsletterSubject(e.target.value)} />
        <TextEditor
            value={newsletterBody}
            onChange={setNewsletterBody}
        />

        <div>
        <ButtonComponent title="Publish" icon="/assets/svg/send.svg" buttonStyle="bg-[#05CC7E] text-white hover:bg-[#05CC7E]" onClick={handleNewNewsletter} />
        </div>
        </div>
    </div>
  )
}

export default NewNewsletter