import ButtonComponent from '@/components/ButtonComponent'
import SideSheetComponent from '@/components/SideSheetComponent'
import Table from '@/components/table/Table'
import { Badge } from '@/components/ui/badge'
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useNewsletterStore } from '@/store/newsletterStore'
import SideMenuSheet from '@/components/SideMenuSheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import PaginationComponent from '@/components/table/PaginationComponent'


const Newsletter = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()

    const {getAllNewsletter, newsletterData,loading, totalPages,  currentPage, itemsPerPage, setPage } = useNewsletterStore()
    
    
    useEffect(() => {
        getAllNewsletter(currentPage, itemsPerPage)
    },[currentPage, itemsPerPage])

    const handleDeleteProduct = async (id) => {
      /* await deleteNewsletter({id: id})
      getNewsletter() */
    }
    

  const handleNew = () => {
    navigate('/new-newsletter')
  };

  console.log("ALL NEWSLETTER", newsletterData)

    const [openSingleProduct, setOpenSingleProduct] = useState(false);

    const handleOpenProduct = async (item) => {
        setOpenSingleProduct(item)
    }

  const columns = [  'Newsletter name', 'Newsletter Subject', 'Newsletter Body', 'Status', 'Actions'];
 const data = [
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      productName: 'Pristin condition',
      price: 4000,
      quantity: 33,
      status: 'available',
    },
    {
        profile: 'https://via.placeholder.com/40',
        name: 'John Doe',
        productName: 'vitamin b+',
        price: 4000,
        quantity: 33,
        status: 'available',
      },
      {
        profile: 'https://via.placeholder.com/40',
        name: 'John Doe',
        productName: 'Candy',
        price: 4000,
        quantity: 33,
        status: 'available',
      },
      {
        profile: 'https://via.placeholder.com/40',
        name: 'John Doe',
        productName: 'Malerai Amatex',
        price: 4000,
        quantity: 33,
        status: 'available',
      },
      {
        profile: 'https://via.placeholder.com/40',
        name: 'John Doe',
        productName: 'Yoga mat',
        price: 4000,
        quantity: 33,
        status: 'available',
      },
      {
        profile: 'https://via.placeholder.com/40',
        name: 'John Doe',
        productName: 'BP Machine',
        price: 4000,
        quantity: 33,
        status: 'available',
      },

    
    
  ];

  const renderRow = (item) => (
    
    <>
      
     
      <td className="py-2 px-4 border-b"><div className='flex items-center space-x-3'> <p>{item?.newsletter_name} </p></div></td>
      <td className="py-2 px-4 border-b"><div className='flex items-center space-x-3'> <p>{item?.newsletter_subject}</p></div></td>
      <td className="py-2 px-4 border-b">{item?.newsletter_body}</td>

      
      <td className="py-2 px-4 border-b"><Badge className={`${item?.stock_status === 'Sent' ? 'bg-[#3864FF12] text-[#3864FF]' : 'bg-[#FFEFEE] text-[#E33B32]' } text-sm rounded-[30px] `} >{item?.status}</Badge></td>
      
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <span  className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)
        handleOpenProduct(item)
    }
        

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></span>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span><MdOutlineDelete className='text-red-500 cursor-pointer' size={22} onClick={()=> handleDeleteProduct(item?._id)} /></span> 
      </div>
      </td>
    </>
  );
  return (
    <>
     <div className="bg-[#FAFBFC] grow p-5 overflow-x-auto flex flex-col">
      <div className="md:flex justify-between items-center w-full">
        <div className="flex space-x-2 items-center flex-1">
        <span className='md:hidden cursor-pointer' onClick={()=>setOpenMenu(true)}><HamburgerMenuIcon /></span>
          <p className="text-[#252525] md:text-[28px] font-semibold">
            Newsletter
          </p>
        </div>

        <div className="mt-3 md:mt-0 w-full flex-1 flex space-x-2 justify-end">
          
          <ButtonComponent
            onClick={handleNew}
            title="New Newsletter"
            buttonStyle="w-auto"
            //icon="/svg/plus_white.svg"
          />
        </div>
      </div>
      {loading === true ? <LoadingSpinner /> :
      <> 
      <div className="w-full bg-white border p-3 mt-4 rounded-2xl grow flex flex-col">
      <Table
         //data={data}
         data={newsletterData}
         headers={columns}
         renderRow={renderRow}
         //tabs={customTabs} // Pass tabs here if needed
         />
      </div>
      
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
        />
        </>

}

    <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />

     {/*  {showAdd ? <ChallengeSidebar closeSideBar={toggleShowAdd} /> : <></>} */}
      {/* <SideSheetComponent
      open={openSingleProduct}
      setOpen={()=>setOpenSingleProduct(false)}
      content={
        <>
        <SingleOrder onClick={()=>setOpenSingleProduct(false)} orderDetails={openSingleProduct}/>
        </>
      }
      /> */}
{/*
     <SideSheetComponent
      open={openSingleProduct}
      setOpen={()=>setOpenSingleProduct(false)}
      content={
        <>
        <SingleProduct productDetails={openSingleProduct}  onClick={()=>setOpenSingleProduct(false)} />
        </>
      }
      /> */}
    </div>
    </>
  )
}

export default Newsletter