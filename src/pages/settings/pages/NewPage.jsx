import BackButton from '@/components/BackButton'
import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import TextEditor from '@/components/TextEditor'
import TextField from '@/components/TextField'
import { usePagesStore } from '@/store/pagesStore'
import React, { useState } from 'react'

const NewPage = () => {
  const {createPage} = usePagesStore();

  const handleCreatePage = async () => {
    await createPage({ name, description, slug})
  }

    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('Description')
  return (
    <div className='p-[20px] bg-white'>
       <div className=''>
       <BackButton />
       </div>

       <div className='mt-5'>
       <InputField title="Name" placeholder="Page Name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputField title="Slug" placeholder="Page Slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
        <TextEditor value={description} onChange={setDescription}/>

        <ButtonComponent
         onClick={handleCreatePage} 
        title="Create Page" />
       </div>

    </div>
  )
}

export default NewPage