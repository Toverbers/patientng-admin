import AdminHeader from '@/components/AdminHeader'
import BackButton from '@/components/BackButton'
import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import SelectInput from '@/components/SelectInput'
import TextEditor from '@/components/TextEditor'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import UploadField from '@/components/UploadField'
import { UseBlogStore } from '@/store/blogStore'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewLearning = () => {
  const {createBlog, getAllCategory, categoryData } = UseBlogStore()
  const [topic, setTopic] = useState('')
  const [body, setBody] = useState('')
  const [publisher, setPublisher] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)
  const [imgUrl, setImgUrl] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState('')


  useEffect(() => {
   getAllCategory()
  },[])

  console.log("CATEGORIES", categoryData)

  const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
    console.log("Image file", image)
    const url = await URL.createObjectURL(e.target.files[0] || image);
    setImageUrl(url)
  };


   const handleNewLearning =async () => {

        //await createBlog(title, urlSlug, category, content, publisher, status, bodyImage, titleImage)
        await createBlog({title: topic, urlSlug: (`/${topic}`).replace(/\s/g, '-').toLowerCase(), category: category, content: body, publisher: publisher, status: 'publish', titleImage: image})
   }

  console.log("BODY VALUE", body)
  console.log("TOPIC", topic)
  return (
    <>
      <div className="p-5 bg-[#FAFBFC] grow overflow-x-auto flex flex-col">
      
      <AdminHeader
        title="Create new Blog"
        hasBackButton
       />

      <div className="w-full h-full md:grid grid-cols-4 gap-5 bg-white p-5">
        <div className="col-span-3 flex flex-col h-full space-y-2">
          <InputField title="Blog Title" placeholder="Enter title" value={topic} onChange={(e) => setTopic(e.target.value)} />
          <div className='flex space-x-3 items-center'>
          {/* <SelectInput
            label="Select Author"
            options={[
              { label: "Author 1", value: "author1" },
              { label: "Author 2", value: "author2" },
              { label: "Author 3", value: "author3" },
            ]}
          /> */}

             <Select className="" defaultValue={category}
                value={category}
                onValueChange={(value) => {setCategory(value)}} >
              <SelectTrigger className="h-[50px]">
                {/*  <SelectValue placeholder={category?.name} /> */}
                <SelectValue placeholder="select Category"></SelectValue>
              </SelectTrigger>
              <SelectContent>
              {categoryData?.map((row) => (<SelectItem key={row?._id} value={row?.name}>{row?.name}</SelectItem> ))}
              </SelectContent>
            </Select>


            <InputField title="Publisher" placeholder="Enter Publisher name" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
          </div>

          <UploadField label="Upload Header Image" onChange={handleImageChange} />
          {imageUrl && <img crossOrigin='annonymous'  src={imageUrl } alt="raffleImage" className='h-[150px] max-w-[250px] object-cover'/>}
          

          {/* <EditorConvertToHTML /> */}
          <TextEditor
            value={body}
            onChange={setBody}
           />

          
        </div>
        {/* SIDE BAR */}
        <div className="rounded-lg border p-3 bg-white space-y-3 h-min mt-5">
      <div className="flex space-x-3 items-center w-full">
        <ButtonComponent title="Preview" icon="/assets/svg/eye.svg" buttonStyle="bg-transparent border border-gray-300 shadow-none text-gray-500 hover:bg-transparent" />
        <ButtonComponent title="Save as draft" icon="/assets/svg/document.svg" buttonStyle="bg-transparent border border-gray-300 shadow-none text-gray-500 hover:bg-transparent" />
      </div>
      <ButtonComponent title="Publish" icon="/assets/svg/send.svg" buttonStyle="bg-[#05CC7E] text-white hover:bg-[#05CC7E]" onClick={handleNewLearning} />
      <ButtonComponent title="Archive" icon="/assets/svg/trash.svg" buttonStyle="bg-transparent text-red-500 hover:bg-red-500 border border-red-500" />
      <hr className="my-2" />

      
    </div>
      </div>
    </div>
    </>
  )
}

export default NewLearning