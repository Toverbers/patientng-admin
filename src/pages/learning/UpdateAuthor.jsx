import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import UploadField from '@/components/UploadField'
import { UseBlogStore } from '@/store/blogStore'
import { useEffect, useState } from 'react'

const UpdateAuthor = ({onClick, authorDetails}) => {

  const {getAuthor, singleAuthor, updateAuthor} = UseBlogStore()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')


  useEffect(() => {
    getAuthor({id: authorDetails?._id})
  },[])

  useEffect(() => {
    if(singleAuthor){
      setName(singleAuthor?.author_name)
      setTitle(singleAuthor?.author_title)
      setImage(singleAuthor?.author_image)
    }
  },[singleAuthor])

  const handleUpdate = async () => {
    
      await updateAuthor({id: singleAuthor?._id, author_name: name, author_title: title, author_image: image })
    
  }


  //console.log("AAUTHOR DETAILS", authorDetails)
  console.log("SINGLE AUTHOR", singleAuthor)
  return (
    <>
          <div className="bg-[#FAFBFC] flex flex-col h-full ">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                New Author
              </p>
              {/* <button onClick={onClick}>
                <img
                  src="/assets/svg/close.svg"
                  alt="close"
                  className="w-5 h-5"
                />
              </button> */}
            </div>

            <div className="p-3 space-y-3 grow overflow-y-auto">
                 <div className="border rounded-lg bg-white">
                <div className="w-full p-5 border-b">
                    <p className="text-[#252525] text-[14px] font-medium">
                    Create new Author here
                    </p>
                </div>

                <div className="w-full px-7 space-y-3 mt-3">
                    <UploadField id="product_image" />
                    <img src={image} alt="author-image" />
                    <InputField title="Name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    
                    <InputField title="Title" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                </div> 
            </div>

            <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
              <ButtonComponent title="Update" buttonStyle="bg-[#004146] text-white" onClick={handleUpdate} />
            </div>
          </div>
        
    
    </>
  )
}

export default UpdateAuthor