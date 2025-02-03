import BackButton from '@/components/BackButton'
import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import SelectInput from '@/components/SelectInput'
import TextEditor from '@/components/TextEditor'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import UploadField from '@/components/UploadField'
import { UseBlogStore } from '@/store/blogStore'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleLearning = () => {
   const {id} = useParams()
   const {getBlog, singleBlog, updateBlog, getAllCategory, categoryData, changeBlogToDraft, changeBlogToPublish, changeBlogToArchive} = UseBlogStore()
   const [topic, setTopic] = useState('')
  const [body, setBody] = useState('')
  const [hubCategory, setHubCategory] = useState('')
  const [publisher, setPublisher] = useState('')
  const [urlSlug, setUrlSlug] = useState('')
  const [image, setImage] = useState(null)
  const [imgUrl, setImgUrl] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState('')


   useEffect(() => {
    getBlog({id:id})
    getAllCategory()
   },[])

   useEffect(() => {
    if(singleBlog){
      setBody(singleBlog?.content)
    setTopic(singleBlog?.title)
    setHubCategory(singleBlog?.category?.name)
    setAuthor(singleBlog?.author)
    setPublisher(singleBlog?.publisher)
    setUrlSlug(singleBlog?.urlSlug)
    setImage(singleBlog?.titleImage)
    }
   },[singleBlog])

   const handleUpdatePublish = async () => {
    await changeBlogToPublish({id: singleBlog?._id})
    getBlog({id:id})
   }
   const handleUpdateArchive = async () => {
    await changeBlogToArchive({id: singleBlog?._id})
    getBlog({id:id})
   }
   const handleUpdateDraft = async () => {
    await changeBlogToDraft({id: singleBlog?._id})
    getBlog({id:id})

   }

   const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
    console.log("Image file", image)
    const url = await URL.createObjectURL(e.target.files[0] || image);
    setImageUrl(url)
  };

   const handleUpdateBlog =async () => {

    //await createBlog(title, urlSlug, category, content, publisher, status, bodyImage, titleImage)
    await updateBlog({id: singleBlog?._id, title: topic, urlSlug: (`/${topic}`).replace(/\s/g, '-').toLowerCase(), category: hubCategory, content: body, publisher: publisher, titleImage: image})
    getBlog({id:id})
}

   const handlePreview = async () => {

   }

   console.log("SINGLE LEARNING DATA", singleBlog)

  return (
    <>
      <div className="p-5 bg-[#FAFBFC] grow overflow-x-auto flex flex-col">
      <BackButton />
      <div className="flex space-x-2 mb-2">
        <p className="text-[#252525] text-[28px] font-semibold grow">
          Update Learning Hub
        </p>
      </div>

      <div className="w-full h-full md:grid grid-cols-4 gap-5">
        
        <div className="col-span-3 flex flex-col h-full space-y-2">
       <div className='my-3 flex space-x-4 items-center'>
       <span className='text-xl'>Status: <Badge className={` p-0 py-2 px-4 text-xs rounded-xl`}>{singleBlog?.status}</Badge></span>
       <span className='text-xl'>Date: {moment(singleBlog?.createdAt).format('DD MMMM YYYY')}</span>
       </div>
          <div>
          <InputField title="Learning Title" placeholder="Enter title" value={topic} />
          <p className=''><span>URL Parameter: {urlSlug}</span></p>
          </div>

          <div className='flex space-x-3 items-center'>


           <Select className="" defaultValue={hubCategory?._id}
              onValueChange={(value) => {setHubCategory(value)}} >
            <SelectTrigger className="h-[50px]">
              <SelectValue placeholder={hubCategory}>{hubCategory}</SelectValue>
            </SelectTrigger>
            <SelectContent>
            {categoryData?.map((row) => (<SelectItem key={row?._id} value={row?.name}>{row?.name}</SelectItem> ))}
            </SelectContent>
          </Select>

          <InputField title="Publisher" placeholder="Enter Publisher name" value={publisher} onChange={(e) => setPublisher(e.target.value)} />

          

          </div>
          <UploadField label="Upload Header Image" onChange={handleImageChange} />
          {imageUrl ? <img crossOrigin='annonymous'  src={imageUrl} alt="raffleImage" className='h-[150px] max-w-[250px] object-cover'/> : 

          <img crossOrigin='annonymous' src={`${import.meta.env.VITE_MAIN_URL}/${singleBlog?.titleImage}`} alt="raffleImage" className='h-[150px] max-w-[250px] object-cover'/>
          }
          {/* <EditorConvertToHTML /> */}
          <TextEditor
            value={body}
            onChange={setBody}
           />

          
        </div>
        {/* SIDE BAR */}
        <div className="rounded-lg border p-3 bg-white space-y-3 h-min mt-5">
      <div className="flex space-x-3 items-center w-full">
        {/* <ButtonComponent onClick={handlePreview} title="Preview" icon="/assets/svg/eye.svg" buttonStyle="bg-transparent border border-gray-300 shadow-none text-gray-500 hover:bg-transparent" /> */}
        <ButtonComponent onClick={handleUpdateDraft} title="Save as draft" icon="/assets/svg/document.svg" buttonStyle="bg-transparent border border-gray-300 shadow-none text-gray-500 hover:bg-transparent" />
      </div>
      <ButtonComponent onClick={handleUpdatePublish} title="Publish" icon="/assets/svg/send.svg" buttonStyle="bg-[#05CC7E] text-white hover:bg-[#05CC7E]" />
      <ButtonComponent onClick={handleUpdateArchive} title="Archive" icon="/assets/svg/trash.svg" buttonStyle="bg-transparent text-red-500 hover:bg-red-500 border border-red-500" />
      <ButtonComponent onClick={handleUpdateBlog} title="Update" buttonStyle="bg-transparent border border-[#05CC7E] text-[#05CC7E] hover:bg-[#05CC7E] hover:text-white" />
      <hr className="my-2" />

      <div className="space-y-1">
        {/* <div className="flex items-center space-x-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.42466 10.9765C2.14002 10.3573 2.14002 9.64288 2.42466 9.02362C3.74225 6.1571 6.6389 4.16675 10.0004 4.16675C13.362 4.16675 16.2586 6.15711 17.5762 9.02362C17.8608 9.64288 17.8608 10.3573 17.5762 10.9766C16.2586 13.8431 13.362 15.8334 10.0004 15.8334C6.6389 15.8334 3.74225 13.8431 2.42466 10.9765Z"
              stroke="#C1C3C7"
              strokeWidth="1.3"
            />
            <path
              d="M12.5004 10.0001C12.5004 11.3808 11.3811 12.5001 10.0004 12.5001C8.61972 12.5001 7.50043 11.3808 7.50043 10.0001C7.50043 8.61937 8.61972 7.50008 10.0004 7.50008C11.3811 7.50008 12.5004 8.61937 12.5004 10.0001Z"
              stroke="#C1C3C7"
              strokeWidth="1.3"
            />
          </svg>
          <p>
          {singleBlog?.viewCount} <span className="text-[#68727D]">Views</span>
          </p>
        </div> */}

        <div className="flex items-center space-x-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.99437 4.29639C8.32825 2.33044 5.54987 1.8016 3.46233 3.60183C1.37478 5.40205 1.08089 8.41194 2.72025 10.5411C4.08326 12.3113 8.20822 16.0449 9.56016 17.2533C9.71142 17.3885 9.78704 17.4561 9.87526 17.4826C9.95225 17.5058 10.0365 17.5058 10.1135 17.4826C10.2017 17.4561 10.2773 17.3885 10.4286 17.2533C11.7805 16.0449 15.9055 12.3113 17.2685 10.5411C18.9079 8.41194 18.6498 5.38312 16.5264 3.60183C14.403 1.82054 11.6605 2.33044 9.99437 4.29639Z"
              stroke="#C1C3C7"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>
            {singleBlog?.likes?.length} <span className="text-[#68727D]">Likes</span>
          </p>
        </div>

        <div className="flex items-center space-x-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 11.2347 2.79834 12.3997 3.32688 13.4268C3.57355 13.9062 3.64953 14.466 3.45851 14.9702L2.7138 16.9357C2.61052 17.2083 2.81192 17.5 3.10344 17.5H10Z"
              stroke="#C1C3C7"
              strokeWidth="1.3"
            />
          </svg>
          <p>
            {singleBlog?.comments?.length} <span className="text-[#68727D]">Comments</span>
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default SingleLearning