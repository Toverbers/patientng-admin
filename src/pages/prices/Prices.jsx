import ButtonComponent from '@/components/ButtonComponent'
import SideSheetComponent from '@/components/SideSheetComponent';
import Table from '@/components/table/Table'
import { usePriceStore } from '@/store/priceStore';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NewPrice from './NewPrice';
import LoadingSpinner from '@/components/LoadingSpinner';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SideMenuSheet from '@/components/SideMenuSheet';
import PaginationComponent from '@/components/table/PaginationComponent';





//const customTabs = ['all', 'Active', 'Inactive', 'Completed'];
const Prices = () => {
    const [openNewPrice, setOpenNewPrice] = useState(false)
  const {getAllPrice, priceData, loading, totalPages,  currentPage, itemsPerPage, setPage} = usePriceStore()
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(()=> {
    getAllPrice(currentPage, itemsPerPage)
  },[currentPage, itemsPerPage])

  console.log("ALL PRICES HERE", priceData)

    const columns = ['Type', 'Product', 'Category',  'Actions'];

  const renderRow = (item) => (
    <>
     
      <td className="py-2 px-4 border-b">{item?.type}</td>
      <td className="py-2 px-4 border-b">{item?.product}</td>
      <td className="py-2 px-4 border-b">{item?.category}</td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <div className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></div>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span onClick={() => { console.log("hello", item)}} ><MdOutlineDelete className='text-red-500' size={22} /></span> 
      </div>
      </td>
    </>
  ); 

  return (
    <>
    {loading === true ? <LoadingSpinner /> :
     <div className="bg-[rgb(250,251,252)] grow p-5 overflow-x-auto flex flex-col">
      <div className="md:flex justify-between items-center w-full">
        <div className="flex space-x-2 items-center flex-1">
        <span className='md:hidden cursor-pointer' onClick={()=>setOpenMenu(true)}><HamburgerMenuIcon /></span>
          <p className="text-[#252525] md:text-[28px] font-semibold">Prices</p>
        </div>

        <div className="mt-3  flex md:mt-0 w-full flex-1 space-x-3 justify-end">
          <ButtonComponent
            title="Create Questions"
            buttonStyle="w-auto"
            //icon="/svg/plus_white.svg"
            onClick={()=> setOpenNewPrice(true)}
          />
          
        </div>
      </div>

      <div className="w-full bg-white border p-3 mt-4 rounded-2xl grow flex flex-col">
      <Table
            //data={data}
            data={priceData}
            headers={columns}
            renderRow={renderRow}
            //tabs={customTabs} // Pass tabs here if needed
            //tabs={{ activeTab, onChangeTab: setActiveTab }}
        />

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
        />
      </div>

       <SideSheetComponent
            open={openNewPrice}
            setOpen={()=>setOpenNewPrice(false)}
            sheetStyle="md:w-[500px] md:max-w-[500px] p-0"
            content={
              <>
               <NewPrice onClick={()=>setOpenNewPrice(false)} /> 
              
              </>
            }
            /> 
      
    <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />

    </div>
}
    </>
  )
}

export default Prices