import ButtonComponent from '@/components/ButtonComponent'
import  { useEffect, useState } from 'react'

import Table from '@/components/table/Table'
import { Link } from 'react-router-dom';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';
import { useAdminRoleStore } from '@/store/adminRoleStore';
import SideSheetComponent from '@/components/SideSheetComponent';
import SingleRole from './SingleRole';
import NewRole from './NewRole';
import BackButton from '@/components/BackButton';


//const customTabs = ["all", "SuperAdmin", "Manager", "Operations",];
const Roles = () => {
const {getAllRole, roleData, deleteRole} = useAdminRoleStore()
const [openNewRole, setOpenNewRole] = useState()
const [openSingleRole, setOpenSingleRole] = useState()

useEffect(()=>{
    getAllRole()
},[])


const handleDeleteRole = async (id) =>{
  await deleteRole({id: id})
  getAllRole()
}

console.log("ADMIN DATAS", roleData)

    const columns = ["Name", "Description",  "Actions" ];

  const renderRow = (item) => (
    <>
     
      <td className="py-2 px-4 border-b">{item?.name}</td>
      <td className="py-2 px-4 border-b">{item?.description}</td>
      
      
     <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <span  className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)
        setOpenSingleRole(true)
    }
        }><MdOutlineRemoveRedEye className='text-gray-500 ' size={22} /></span>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span className='cursor-pointer' onClick={()=> handleDeleteRole(item?._id)}><MdOutlineDelete className='text-red-500' size={22} /></span> 
      </div>
      </td>
    </>
  ); 

  return (
    <div className='p-8'>
        <div className="md:flex md:justify-between md:items-center w-full">
        <div className="flex space-x-2 items-center">
          {/* <Menu /> */}
          <BackButton />
          <p className="text-[#252525] md:text-[28px] font-semibold">
            Roles
          </p>
        </div>

        <div className="md:flex items-center md:space-x-3 mt-3 md:mt-0 space-y-2 md:space-y-0">
          <ButtonComponent
            title="New Role"
            icon="/assets/svg/plus_black.svg"
            buttonStyle="bg-transparent border border-[f1f1f1] text-[#333333] hover:bg-transparent"
            onClick={()=>setOpenNewRole(true)}
          />

          
        </div>
      </div>

      <div className="w-full bg-white border p-3 mt-4 rounded-2xl grow flex flex-col">
      <Table
            //data={data}
            data={roleData}
            headers={columns}
            renderRow={renderRow}
            //tabs={customTabs} // Pass tabs here if needed
        />
      </div>


      <SideSheetComponent
            open={openSingleRole}
            setOpen={()=>setOpenSingleRole(false)}
            sheetStyle="md:w-[500px] md:max-w-[500px] p-0"
            content={
              <>
              <SingleRole onClick={()=>setOpenSingleRole(false)} />
              </>
            }
            />

      <SideSheetComponent
            open={openNewRole}
            setOpen={()=>setOpenNewRole(false)}
            sheetStyle="md:w-[500px] md:max-w-[500px] p-0"
            content={
              <>
              <NewRole onClick={()=>setOpenNewRole(false)} />
              </>
            }
            />


    </div>
  )
}

export default Roles