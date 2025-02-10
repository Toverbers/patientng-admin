import React, { useState } from 'react'
import AllPages from './AllPages'
import ButtonComponent from '@/components/ButtonComponent'
import ModalComponent from '@/components/ModalComponent'
import NewPage from './NewPage'
import { useNavigate } from 'react-router-dom'
import TextEditor from '@/components/TextEditor'
import { useWebsiteStore } from '@/store/websiteStore'

const Pages = () => {
  const {updatePage} = useWebsiteStore()
  const [about, setAbout] = useState('')
  const [contact, setContact] = useState('')
  const navigate = useNavigate()

  const handlePages =  async () =>{
   await updatePage({aboutUs: about, contactUs: contact})
  }

  return (
    <div className='mt-5 pb-10'>
      <div className='flex flex-col space-y-3 '>
      <ButtonComponent
        onClick={handlePages}
        title="Publish"
        buttonStyle="w-auto px-10" 
        />
      <div className='space-y-2 mb-5 box-border overflow-auto'>
        <h3 className='text-3xl font-medium'>About</h3>
        <TextEditor
              value={about}
              onChange={setAbout}
            />
        </div>
      <div className='space-y-2 mt-10 box-border overflow-auto'>
        <h3 className='text-3xl font-medium'>Contact</h3>
        <TextEditor
              value={contact}
              onChange={setContact}
            />
        </div>

        

     
      </div>
    </div>
  )
}

export default Pages