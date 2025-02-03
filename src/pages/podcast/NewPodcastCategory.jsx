import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import UploadField from '@/components/UploadField'
import { UseBlogStore } from '@/store/blogStore'
import { UsePodcastStore } from '@/store/podcastStore'
import { useState } from 'react'

const NewPodcastCategory = ({onClick}) => {
  const [name, setName] = useState('')
  const {createPodcastCategory} = UsePodcastStore()


  const handleCreateCategory = async () => {
    createPodcastCategory({name: name})
  }
  return (
    <>
          <div className="bg-[#FAFBFC] flex flex-col h-full">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                New Category
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
                    Create new Category here
                    </p>
                </div>

                <div className="w-full px-7 space-y-3 mt-3">
                    <InputField title="Name" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} />
                    
                </div>
                </div> 
            </div>

            <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
              <ButtonComponent title="Save" buttonStyle="bg-[#004146] text-white" onClick={handleCreateCategory} />
            </div>
          </div>
        
    
    </>
  )
}

export default NewPodcastCategory