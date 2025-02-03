import ButtonComponent from '@/components/ButtonComponent'
import SideSheetComponent from '@/components/SideSheetComponent'
import Table from '@/components/table/Table'
import { Badge } from '@/components/ui/badge'
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md'
/* import NewProduct from './NewProduct'
import SingleProduct from './SingleProduct' */
import { useNavigate } from 'react-router-dom'
import { useProductStore } from '@/store/productStore'
import LoadingSpinner from '@/components/LoadingSpinner'
import SingleOrder from './SingleOrder'
import SideMenuSheet from '@/components/SideMenuSheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import PaginationComponent from '@/components/table/PaginationComponent'

const Orders = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const [openNewProduct, setNewOpenProduct] = useState(false);

    const {getAllOrders, orderData, getAllProduct, productData, loading, deleteProduct, o_totalPages,  o_currentPage, o_itemsPerPage, o_setPage} = useProductStore()
    
    
    useEffect(() => {
        getAllOrders(o_currentPage, o_itemsPerPage)
    },[o_currentPage, o_itemsPerPage])

    const handleDeleteProduct = async (id) => {
      await deleteProduct({id: id})
      getAllProduct()
    }
    const navigate = useNavigate()

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };


    const [openSingleProduct, setOpenSingleProduct] = useState(false);

    const handleOpenProduct = async (item) => {
        setOpenSingleProduct(item)
    }

  const columns = [ 'Image', 'User name', 'Product name', 'Total Price', 'Quantity', 'Status', 'Actions'];
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
      
      <td className="py-2 px-4 border-b"><div className='flex items-center space-x-3'><img src={item?.product_id?.image} alt="Profile" className="rounded-xl w-10 h-10" /></div></td>
      <td className="py-2 px-4 border-b"><div className='flex items-center space-x-3'> <p>{item?.patient_id?.firstname} {item?.patient_id?.lastname}</p></div></td>
      <td className="py-2 px-4 border-b"><div className='flex items-center space-x-3'> <p>{item?.product_id?.name}</p></div></td>
      <td className="py-2 px-4 border-b">{item?.total_amount}</td>
      <td className="py-2 px-4 border-b">{item?.quantity}</td>
      
      <td className="py-2 px-4 border-b"><Badge className={`${item?.stock_status === 'Available' ? 'bg-[#3864FF12] text-[#3864FF]' : 'bg-[#FFEFEE] text-[#E33B32]' } text-sm rounded-[30px] `} >{item?.order_status?.at(-1)?.status}</Badge></td>
      
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
            Orders
          </p>
        </div>

        <div className="mt-3 md:mt-0 w-full flex-1 flex space-x-2 justify-end">
          <ButtonComponent
            onClick={()=>navigate('/product-category')}
            title="Product Category"
            buttonStyle="w-auto"
            //icon="/svg/plus_white.svg"
          />
          <ButtonComponent
            onClick={()=>setNewOpenProduct(true)}
            title="New Product"
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
         data={orderData}
         headers={columns}
         renderRow={renderRow}
         //tabs={customTabs} // Pass tabs here if needed
         />
      </div>
      <PaginationComponent
        currentPage={o_currentPage}
        totalPages={o_totalPages}
        onPageChange={o_setPage}
        />
      
      </>
}

     {/*  {showAdd ? <ChallengeSidebar closeSideBar={toggleShowAdd} /> : <></>} */}
      <SideSheetComponent
      open={openSingleProduct}
      setOpen={()=>setOpenSingleProduct(false)}
      content={
        <>
        <SingleOrder onClick={()=>setOpenSingleProduct(false)} orderDetails={openSingleProduct}/>
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

export default Orders