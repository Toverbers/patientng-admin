import ButtonComponent from '@/components/ButtonComponent'
import React, { useEffect, useState } from 'react'
import AdminSummary from './AdminSummary'
import Table from '@/components/table/Table'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';
import { useAdminRoleStore } from '@/store/adminRoleStore';
import SideSheetComponent from '@/components/SideSheetComponent';
import NewAdmin from './NewAdmin';
import SideMenuSheet from '@/components/SideMenuSheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import PaginationComponent from '@/components/table/PaginationComponent';
import { useUserStore } from '@/store/usersStore';
import AdminHeader from '@/components/AdminHeader';


const customTabs = ['All', 'Active', 'Inactive'];

const Admins = () => {
const {getAllUser, userData, deleteUser} = useUserStore()
const [activeTab, setActiveTab] = useState('All');
const [openNewAdmin, setOpenNewAdmin] = useState()
const [openNewRole, setOpenNewRole] = useState()
const navigate = useNavigate()
const [openMenu, setOpenMenu] = useState(false)

useEffect(() => {
  getAllUser()
},[])

const handleDeleteUser = async (id) => {
 await deleteUser({id:id})
 getAllUser()
}

  const columns = ["Name", "Email",  "Actions" ];

  const renderRow = (item) => (
    <>
     
      <td className="py-2 px-4 border-b">{item?.firstName} {item?.lastName}</td>
      <td className="py-2 px-4 border-b">{item?.email}</td>
       {/* <td className="py-2 px-4 border-b">{item?.role?.name}</td>  */}
      
      {/* <td className="py-2 px-4 border-b">{ moment(item?.start_date).format('DD MMMM YYYY')}</td> */}
      
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <Link to={`/users/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span className='cursor-pointer'><MdOutlineDelete className='text-red-500' size={22} onClick={()=>handleDeleteUser(item?._id)}/></span> 
      </div>
      </td>
    </>
  );
  
  
  const adminUsers = userData?.filter(user => user?.isAdmin);

  const filteredData = adminUsers?.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === "Active") return item?.active === true;
    if (activeTab === "Inactive") return item?.active === false;
    return false; // Default case
  });

  return (
    <div className='p-5'>

      <AdminHeader
         title="Roles & Admin"
         //hasBackButton
         content={
          <>
            <div className="md:flex items-center md:space-x-3 mt-3 md:mt-0 space-y-2 md:space-y-0">

          <ButtonComponent
            title="New User"
            icon="/assets/svg/plus_white.svg"
            onClick={()=>setOpenNewAdmin(true)}
          />
          </div>
          </>
         }
         />

      {/* <AdminSummary adminDetails={adminData} /> */}

      <div className="w-full bg-white border p-3 mt-4 rounded-2xl grow flex flex-col">
      <Table
            //data={data}
            data={filteredData}
            headers={columns}
            renderRow={renderRow}
            //tabs={customTabs} // Pass tabs here if needed
            //tabs={{ activeTab, onChangeTab: setActiveTab }}
        />
        
      </div>



      <SideSheetComponent
            open={openNewAdmin}
            setOpen={()=>setOpenNewAdmin(false)}
            sheetStyle="md:w-[500px] md:max-w-[500px] p-0"
            content={
              <>
              <NewAdmin onClick={()=>setOpenNewAdmin(false)} />
              </>
            }
            />

      <SideSheetComponent
            open={openNewRole}
            setOpen={()=>setOpenNewRole(false)}
            sheetStyle="md:w-[500px] md:max-w-[500px] p-0"
            content={
              <>
              <NewAdmin onClick={()=>setOpenNewRole(false)} />
              </>
            }
            />

     <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />


    </div>
  )
}

export default Admins