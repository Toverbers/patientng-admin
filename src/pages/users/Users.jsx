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


const customTabs = ['All', 'Active', 'Inactive'];


const Users = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [openMenu, setOpenMenu] = useState(false)
    const {getAllUser, userData, loading, deleteUser} = useUserStore()

    //console.log("SET PAGES", setPage)


    useEffect(() => {
      getAllUser()
    },[])

    const handleDeleteUser = async (id) => {
     await deleteUser({id:id})
     getAllUser()
    }

    console.log("USERS INFORMATION", userData)

  const columns = ['Profile', 'Name', 'Age', 'Email', 'Status',  'Actions'];


   const renderRow = (item) => (
    <>
    
    <td className="py-2 px-4 border-b"> <img crossOrigin='anonymous' src={item?.image? `${import.meta.env.VITE_MAIN_URL}/${item?.image}` : '/assets/png/user.png'} alt="Profile" className="rounded-full w-10 h-10 cover" /></td>
      <td className="py-2 px-4 border-b">{item?.firstName} {item?.lastName}</td>
      <td className="py-2 px-4 border-b">{item?.age}</td>
      <td className="py-2 px-4 border-b"><a href={`mailto:${item?.email}`} className="text-gray-500">{item?.email}</a></td>
      <td className="py-2 px-4 border-b"><Badge className={`rounded-[15px] py-[5px] px-[10px] text-sm ${item?.active  ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500' }`}>{item?.active  ? 'Active' : 'Inactive'}</Badge></td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <Link to={`/users/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span className='cursor-pointer'><MdOutlineDelete className='text-red-500' size={22} onClick={()=>handleDeleteUser(item?._id)} /></span> 
      </div>
      </td>
      
    </>
  ); 

  //const uniqueStatuses = [...new Set(data?.map(item => item?.status))];
  //const filteredData = activeTab === 0 ? data : data?.filter(item => item?.active === customTabs[activeTab]);
  //const filteredData = activeTab === 0 ? userData : userData?.filter(item => item?.active === customTabs[activeTab]);
  
  /* const filteredData = userData?.filter(item => {
    if (activeTab === 'All') return true;
    return activeTab === 'Active' ? item?.active === true : item?.active === false;
  }); */

  const filteredData = userData?.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === "Active") return item?.active === true;
    if (activeTab === "Inactive") return item?.active === false;
    return false; // Default case
  });

  return (
    <>
    
     {loading === true ? <LoadingSpinner /> : <>
      <div className='p-5'>
      <div className="flex space-x-2 items-center">
      <span className='md:hidden cursor-pointer' onClick={()=>setOpenMenu(true)}><HamburgerMenuIcon /></span>
        <p className="text-[#252525] md:text-[28px] font-semibold">Users</p>
      </div>
        <div className="w-full bg-white rounded-2xl border border-gray-100 overflow-x-auto overflow-y-auto box-border mt-4">

      {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */} 
      <div className="flex gap-2">
        {customTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab ? 'border-b-gray-300 text-emerald-500' : 'text-gray-500'
            } font-medium inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 capitalize`}
          >
            {tab}
          </button>
        ))}
      </div>
      
        <Table
                //data={data}
                data={filteredData}
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

export default Users