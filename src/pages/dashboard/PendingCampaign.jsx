import CustomRow from '@/components/table/CustomRow';
import Table from '@/components/table/Table';
import Tabs from '@/components/table/Tabs';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdChangeCircle, MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { useUserStore } from '@/store/usersStore';
import { Badge } from '@/components/ui/badge';
import LoadingSpinner from '@/components/LoadingSpinner';
import PaginationComponent from '@/components/table/PaginationComponent';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SideMenuSheet from '@/components/SideMenuSheet';
import AdminHeader from '@/components/AdminHeader';
import { UseCampaignStore } from '@/store/campaignStore';
import moment from 'moment';


const customTabs = ['all', 'pending', 'active', 'inactive'];


const PendingCampaigns = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)
    const {getAllUser, totalPages, userData, loading, getAllUsers, currentPage, itemsPerPage, setPage} = useUserStore()
    const {getAllCampaigns, campaignData} = UseCampaignStore()

    //console.log("SET PAGES", setPage)


   /*  useEffect(() => {
      getAllUsers(currentPage, itemsPerPage)
    },[currentPage, itemsPerPage]) */

    useEffect(() => {
      getAllUser()
      getAllCampaigns()
    },[])

    console.log("USERS INFORMATION", campaignData)

  const columns = ['Image', 'Title & Date Created', 'Fundraising for', 'Amount', 'Location', 'Status',   'Actions'];

   const renderRow = (item) => (
    <>
    
    <td className="py-2 px-4 border-b"> <img crossOrigin='anonymous' src={item?.image? `${import.meta.env.VITE_MAIN_URL}/${item?.image}` : '/assets/png/user.png'} alt="Profile" className="rounded-xl w-10 h-10 cover" /> </td>
    <td className="py-2 px-4 border-b"> {item?.title} {moment(item?.createdAt).format('DD MMMM YYYY')} </td>
      {/* <td className="py-2 px-4 border-b">{item?.user?.firstname} </td> */}
      <td className="py-2 px-4 border-b">{item?.fundraisingFor}</td>
      <td className="py-2 px-4 border-b"><p className="text-gray-500">{item?.amountNeeded}</p></td>
      <td className="py-2 px-4 border-b"><p className="text-gray-500">{item?.address}</p></td>
      <td className="py-2 px-4 border-b">
        <div className='flex space-x-2 items-center'>
          <Badge className={`rounded-[15px] py-[5px] px-[10px] text-sm ${item?.status === 'completed' ? 'bg-green-100 text-green-600' : item?.status === 'pending' ? 'bg-orange-100 text-orange-500' : 'bg-red-100 text-red-500' }`}>{item?.status}</Badge> 
          {/* <span className='cursor-pointer'><MdChangeCircle className='text-gray-500' size={22} onClick={()=>handleUpdateCampagin(item?._id)}/></span> */}
        </div>
      </td> 
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <Link to={`/campaigns/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      {/* <span><MdOutlineDelete className='text-red-500' size={22} /></span> */} 
       
      </div>
      </td>
      
    </>
  ); 

  //const uniqueStatuses = [...new Set(data.map(item => item.status))];
  const filteredData = campaignData?.filter(item => item.status === 'pending');
  const sliceData = filteredData?.slice(0,9)
  return (
    <>
    
     {loading === true ? <LoadingSpinner /> : <>
      <div className='px-5'>
        <div className="w-full bg-white rounded-2xl overflow-x-auto overflow-y-auto box-border mt-2">

        {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */}
            <Table
                //data={data}
                data={sliceData}
                headers={columns}
                renderRow={renderRow}
                //tabs={customTabs} // Pass tabs here if needed
                //tabs={{ activeTab, onChangeTab: setActiveTab }}
                pagination='true'
            />
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

export default PendingCampaigns