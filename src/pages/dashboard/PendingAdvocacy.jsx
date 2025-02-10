import CustomRow from '@/components/table/CustomRow';
import Table from '@/components/table/Table';
import Tabs from '@/components/table/Tabs';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { useUserStore } from '@/store/usersStore';
import { Badge } from '@/components/ui/badge';
import LoadingSpinner from '@/components/LoadingSpinner';
import PaginationComponent from '@/components/table/PaginationComponent';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SideMenuSheet from '@/components/SideMenuSheet';
import AdminHeader from '@/components/AdminHeader';
import { UseAdvocacyStore } from '@/store/advocacyStore';
import { Calendar, Dot } from 'lucide-react';


const customTabs = ['all', 'pending', 'progress', 'closed'];


const PendingAdvocacy = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)
    const {getAllUser, totalPages, userData, loading, getAllUsers, currentPage, itemsPerPage, setPage} = useUserStore()
    const {getAllAdvocacy, advocacyData} = UseAdvocacyStore()

    //console.log("SET PAGES", setPage)


    useEffect(() => {
      getAllAdvocacy()
    },[])

    console.log("USERS INFORMATION", advocacyData)

  const columns = ['Title & Date Created', 'Created by', 'Fundraising for', 'About', 'Location', 'Status',   'Actions'];
 

   const renderRow = (item) => (
    <>
    
    <td className="py-2 px-4 border-b"> <img src={item?.image? item?.image : '/assets/png/user.png'} alt="Profile" className="rounded-full w-10 h-10 cover" /></td>
      <td className="py-2 px-4 border-b">{item?.firstname} {item?.lastname}</td>
      <td className="py-2 px-4 border-b">{item?.age}</td>
      <td className="py-2 px-4 border-b"><a href={`mailto:${item?.email}`} className="text-gray-500">{item?.email}</a></td>
      <td className="py-2 px-4 border-b"><a href={`mailto:${item?.email}`} className="text-gray-500">{item?.email}</a></td>
      <td className="py-2 px-4 border-b"><Badge className={`rounded-[15px] py-[5px] px-[10px] text-sm ${item?.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500' }`}>{item?.status}</Badge></td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <Link to={`/users/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span><MdOutlineDelete className='text-red-500' size={22} /></span> 
      </div>
      </td>
      
    </>
  ); 

  const uniqueStatuses = [...new Set(advocacyData?.map(item => item.status))];
  const filteredData = advocacyData?.filter(item => item.status === 'pending');
  
  return (
    <>
    
     {loading === true ? <LoadingSpinner /> : <>
      <div className='p-5'>
      
        <div className="w-full bg-white rounded-2xl overflow-x-auto overflow-y-auto box-border mt-2 ">

         {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} /> */}
         <div className='flex flex-col space-y-3 '>
          {filteredData?.slice(0,5).map((advocacy, index) => ( 
            <Link key={index} to={`/advocacy/${advocacy?._id}`}>
              <div  className='p-5 bg-white space-y-2 border border-[#f1f1f1] rounded-xl'>
              <div className='flex justify-between'>
                <div className='flex space-x-2 items-center'>
                  <p>{advocacy?.hospitalName}</p>
                  <span className=''><Badge className={`flex items-center justify-center py-1 rounded-lg ${advocacy?.status === 'progress'} ? 'bg-[#FFEFB2] text-[#FFCB00]' ? ${advocacy?.status === 'pending' ? 'bg-[#FFEFB2] text-[#c5a62b]' : 'bg-[#FFEFB2] text-[#FFCB00]'}`}>{advocacy?.status}</Badge></span>
                </div>

                <span>{advocacy?.reference}</span>
              </div>

              <div className='flex space-x-2 items-center'>
                <Calendar size={18} className='text-gray-400' />
                <span className=''>{advocacy?.hospitalAddress}</span>
              </div>
              <div className=''>
                <span className='text-[#68727D]'>{advocacy?.complaints}</span>
              </div>
            </div>
            </Link>
          ))}
         </div> 
        
           
            </div>
    </div>
     </>}
     <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />
    </>
  )
}

export default PendingAdvocacy