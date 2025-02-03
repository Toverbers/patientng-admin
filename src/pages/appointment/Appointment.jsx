import ModalComponent from '@/components/table/ModalComponent';
import Table from '@/components/table/Table'
import { Badge } from '@/components/ui/badge';
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SingleAppointment from './SingleAppointment';
import { UseAppointmentStore } from '@/store/appointmentStore';
import moment from 'moment';
import LoadingSpinner from '@/components/LoadingSpinner';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SideMenuSheet from '@/components/SideMenuSheet';
import PaginationComponent from '@/components/table/PaginationComponent';


const customTabs = ['all', 'Pending', 'Cancelled', 'Booked'];
const Appointment = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)
    const [open, setOpen] = useState(false);
    const {getAllAppointment, appointmentData, loading, totalPages,  currentPage, itemsPerPage, setPage} = UseAppointmentStore()

    const handleOpenAppointment = async (item) => {
        setOpen(item)
    }

    useEffect(() => {
      getAllAppointment(currentPage, itemsPerPage)
    },[currentPage, itemsPerPage])

    console.log("APPOINTMENTS LIST", appointmentData)

  const columns = ['Logo', ' Name',  'Facility Name', 'Facility Location', 'Date', , 'Facility Type', 'Status',  'Actions'];


  const renderRow = (item) => (
    <>
      <td className="py-2 px-4 border-b"> <img src={`/assets/png/avatar2.png`} alt="Profile" className="rounded-full w-10 h-10" /></td>
      <td className="py-2 px-4 border-b">{item?.patient?.firstname} {item?.patient?.lastname}</td>
      <td className="py-2 px-4 border-b">{item?.facility_name}</td>
      <td className="py-2 px-4 border-b">{item?.facility_address}</td>
      <td className="py-2 px-4 border-b"> { moment(item?.createdAt).format('DD MMMM YYYY')}</td>
      <td className="py-2 px-4 border-b">{item?.facility_type}</td>
      <td className="py-2 px-4 border-b"><Badge className={`${item?.status === 'Pending' ? 'bg-orange-100' : item?.status === 'Cancelled' ? 'bg-red-100 text-red-400' : 'bg-[#F2F6F7]' }`} variant="outline">{item?.status === 'Pending' ? 'Upcomming' : item?.status === 'Cancelled' ? 'Cancelled' : 'Past' }</Badge></td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <span  className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)
        handleOpenAppointment(item)
    }
        

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></span>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span><MdOutlineDelete className='text-red-500' size={22} /></span> 
      </div>
      </td>
    </>
  );


  return (
    <>
    <div className="bg-[#FAFBFC] grow p-5 overflow-x-auto flex flex-col">
      <div className="flex space-x-2 items-center">
      <span className='md:hidden cursor-pointer' onClick={()=>setOpenMenu(true)}><HamburgerMenuIcon /></span>
        <p className="text-[#252525] md:text-[28px] font-semibold">Appointments</p>
      </div>

      {loading === true ? <LoadingSpinner /> : 
      <><div className="w-full bg-white border p-3 mt-4 rounded-2xl grow flex flex-col">
        
        <Table
         //data={data}
         data={appointmentData}
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
    </>
}

      <ModalComponent open={open} setOpen={() => setOpen(false)} 
       title="Appointment Details"
       content={
        <>
         <SingleAppointment appointmentDetails={open} onClick={() => setOpen(false)} />
        </>
       }
      />

    <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />
    </div>


    </>
  )
}

export default Appointment