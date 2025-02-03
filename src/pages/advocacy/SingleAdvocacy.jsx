import AdminHeader from '@/components/AdminHeader'
import ButtonComponent from '@/components/ButtonComponent'
import { Badge } from '@/components/ui/badge'
import { UseAdvocacyStore } from '@/store/advocacyStore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleAdvocacy = () => {
  const {getAdvocacy, singleAdvocacy} = UseAdvocacyStore()
  const {id} = useParams()

  useEffect(() =>{
    getAdvocacy({id:id})
  },[])

  const handleStatusUpdate = async () =>{

  }

  console.log("SINGLE ADVOCACY DETAILS", singleAdvocacy)
  return (
    <div className='p-5'>
        <div className=''>
            <AdminHeader
              title="Advocacy Details"
              hasBackButton 
              content={
                <>
                
                
                </>
              }
            />
        </div>

        <div className='max-w-2xl border border-gray-100 p-5 bg-white rounded-lg shadow-lg'>
        {/* <div className="md:flex items-center md:space-x-3 mt-3 md:mt-0 space-y-2 md:space-y-0">

            <ButtonComponent
              title="set progress"
              //icon="/assets/svg/plus_white.svg"
              buttonStyle="min-w-[150px] h-10 md:max-w-[180px] text-sm text-emerald-600 bg-transparent hover:bg-emerald-600 border border-emerald-500"
              onClick={handleStatusUpdate}
            />
            </div> */}
          <div className='py-3 flex items-center justify-between'>
            <div>
            <h2 className='font-medium text-2xl'>{singleAdvocacy?.user?.firstName} {singleAdvocacy?.user?.lastName}</h2>
            <p className='font-medium'>{singleAdvocacy?.reference}</p>
            </div>

            <Badge className={`rounded-[15px] py-[5px] px-[10px] text-sm ${singleAdvocacy?.status === 'progress'} ? 'bg-[#FFEFB2] text-[#FFCB00]' ? ${singleAdvocacy?.status === 'pending' ? 'bg-[#FFEFB2] text-[#c5a62b]' : 'bg-[#FFEFB2] text-[#FFCB00]'}`}>{singleAdvocacy?.status}</Badge>
          </div>
          <div className='py-3 flex items-center justify-between'>
            <p className='font-medium'>Category </p>
            <p>{singleAdvocacy?.category}</p>
          </div>
          <div className='py-3 flex items-center justify-between'>
            <p className='ffont-medium'>Hospital Name</p>
            <p>{singleAdvocacy?.hospitalName}</p>
          </div>
          <div className='py-3 flex items-center justify-between'>
            <p className='font-medium'>Hospital Address </p>
            <p>{singleAdvocacy?.hospitalAddress}</p>
          </div>
          <div className='py-3 flex flex-col space-y-3'>
            <h3 className='font-medium'>Complaints </h3>
            <p>{singleAdvocacy?.complaints}</p>
          </div>
            
        </div>

        
    </div>
  )
}

export default SingleAdvocacy