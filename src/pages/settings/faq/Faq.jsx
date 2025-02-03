import React from 'react'
import AllFaq from './AllFaq'
import ButtonComponent from '@/components/ButtonComponent'
import NewFaq from './NewFaq'

const Faq = () => {
  return (
    <>
    <div className='p-[20px] border rounded-xl my-5'>
    {/* <div className="p-5 bg-white border-b ">
      <div className="md:flex space-x-2">
        <p className="text-[#252525]  md:ml-0 md:text-[28px] font-semibold grow">
          FAQ
        </p>
        <div className="flex flex-col mt-2 space-y-2 md:flex-row md:mt-0 md:space-y-0 space-x-0 md:space-x-2">
           <ButtonComponent title="New FAQ" buttonStyle="text-[#004146] bg-[#004146] text-[14px] font-medium px-3 py-2 rounded-md bg-transparent border border-[#004146] hover:bg-[#E33B32] hover:text-white" />
         
        </div>
      </div>
    </div> */}

    <div>
      <h2 className="text-[#252525]  md:ml-0 md:text-[28px] font-semibold grow mb-3">Create Faq</h2>
      <NewFaq />
    </div>

      <div className='mt-5 '>
        <h2 className='text-2xl font-semibold border-b py-2'>FAQ list</h2>
        <AllFaq />
      </div>
    </div>
    </>
  )
}

export default Faq