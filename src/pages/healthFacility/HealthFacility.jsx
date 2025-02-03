import LoadingSpinner from '@/components/LoadingSpinner';
import SideMenuSheet from '@/components/SideMenuSheet';
import PaginationComponent from '@/components/table/PaginationComponent';
import Table from '@/components/table/Table'
import { Badge } from '@/components/ui/badge';
import { useHealthcareStore } from '@/store/healthcareStore';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';


const customTabs = ["all", "Approved", "Unapproved", "Pending", "Deactivated"];
const HealthFacility = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)
    const [open, setOpen] = useState(false);
    const {getAllHealthcare, healthcareData, loading, totalPages,  currentPage, itemsPerPage, setPage} = useHealthcareStore()

    const handleOpenAppointment = async (item) => {
        setOpen(item)
    }

    useEffect(() => {
     getAllHealthcare(currentPage, itemsPerPage)
    },[currentPage, itemsPerPage])

    

    console.log("healthcare", healthcareData)

  const columns = ['Logo', 'Facility Name', 'Facility Location', 'Date', , 'Facility Type', 'Status',  'Actions'];

  const renderRow = (item) => (
    <>
      <td className="py-2 px-4 border-b"> <img src={item?.image? item?.image : '/assets/png/user.png'} alt="Profile" className="rounded-full w-10 h-10" /></td>
      {/* <td className="py-2 px-4 border-b">{item?.name}</td> */}
      <td className="py-2 px-4 border-b">{item?.facility?.facility_name}</td>
      <td className="py-2 px-4 border-b">{item?.facility?.address}</td>
      <td className="py-2 px-4 border-b">{item?.createdAt}</td>
      <td className="py-2 px-4 border-b">{item?.facility?.facility_type}</td>
      <td className="py-2 px-4 border-b"><Badge className={`py-[5px] rounded-[13px] ${item?.status === 'Approved' ? 'bg-green-200 text-green-700' : item?.status === 'Unapproved' ? 'bg-[#FFEFEE] text-[#E33B32]' :
       item?.status === 'Pending' ? 'bg-[#f5f0af] text-[#574914]' : 'bg-red-200 text-red-900'  }`} variant="outline">{item?.status === 'Approved' ? 'Approved' : item?.status === 'Cancelled' ? 'Cancelled' : item?.status === 'Pending' ? 'Pending' : 'Unapproved' }</Badge></td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <Link to={`/health-facilities/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
            console.log("hello", item)}
    
            }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      {/* <span><MdOutlineDelete className='text-red-500' size={22} /></span> */} 
      </div>
      </td>
    </>
  );
  return (
    <div className="bg-[#FAFBFC]  p-5 ">
      <div className="flex space-x-2 items-center">
      <span className='md:hidden cursor-pointer' onClick={()=>setOpenMenu(true)}><HamburgerMenuIcon /></span>
        <p className="text-[#252525] md:text-[28px] font-semibold">HealthCare Facility</p>
      </div>
      {loading === true ? <LoadingSpinner /> : 
      <>
       <div className="w-full bg-white border p-3 mt-4 rounded-2xl grow flex flex-col verflow-x-auto overflow-y-auto box-border">
        
        <Table
         //data={data}
         data={healthcareData}
         headers={columns}
         renderRow={renderRow}
         tabs={customTabs} // Pass tabs here if needed
         />
        
      </div>
      <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
      </> }
      

      {/* <ModalComponent open={open} setOpen={() => setOpen(false)} 
       title="Appointment Details"
       content={
        <>
         <SingleAppointment appointmentDetails={open} onClick={() => setOpen(false)} />
        </>
       }
      /> */}

    <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />
    </div>
  )
}

export default HealthFacility