import ButtonComponent from '@/components/ButtonComponent'
import SideSheetComponent from '@/components/SideSheetComponent'
import Table from '@/components/table/Table'
import { Badge } from '@/components/ui/badge'
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md'
import NewProduct from './NewProduct'
import SingleProduct from './SingleProduct'
import { useNavigate } from 'react-router-dom'
import { useProductStore } from '@/store/productStore'
import LoadingSpinner from '@/components/LoadingSpinner'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import SideMenuSheet from '@/components/SideMenuSheet'
import PaginationComponent from '@/components/table/PaginationComponent'

const Products = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const [openNewProduct, setNewOpenProduct] = useState(false);

    const {getAllProduct, productData, loading, deleteProduct, totalPages,  currentPage, itemsPerPage, setPage} = useProductStore()
    
    
    useEffect(() => {
      getAllProduct()
    },[])

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

  const columns = [ 'Product name', 'Price', 'Quantity', 'Status', 'Actions'];


  const renderRow = (item) => (
    <>
      
    <td className="py-2 px-4 border-b"><div className='flex items-center space-x-3'><img src={item?.image ? `https://drive.google.com/thumbnail?id=${item?.image?.split('id=')[1]}&sz=w1000` : '/assets/png/defaultImage.png'} alt="Profile" className="rounded-xl w-10 h-10" /> <p>{item?.name}</p></div></td>
      {/* <td className="py-2 px-4 border-b"><div className='flex items-center space-x-3'><img src={item?.image ? item?.image : '/assets/png/defaultImage.png'} alt="Profile" className="rounded-xl w-10 h-10" crossOrigin='annonymous' /> <p>{item?.name}</p></div></td> */}
      <td className="py-2 px-4 border-b">{item?.amount}</td>
      <td className="py-2 px-4 border-b">{item?.quantity}</td>
      
      <td className="py-2 px-4 border-b"><Badge className={`${item?.stock_status === 'Available' ? 'bg-[#3864FF12] text-[#3864FF]' : 'bg-[#FFEFEE] text-[#E33B32]' } text-sm rounded-[30px] `} >{item?.stock_status === 'Available' ? 'Available' : 'Not Available' }</Badge></td>
      
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
            Products
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
         data={productData}
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

     {/*  {showAdd ? <ChallengeSidebar closeSideBar={toggleShowAdd} /> : <></>} */}
     <SideSheetComponent
      open={openNewProduct}
      setOpen={()=>setNewOpenProduct(false)}
      content={
        <>
        <NewProduct onClick={()=>setNewOpenProduct(false)} />
        </>
      }
      />

     <SideSheetComponent
      open={openSingleProduct}
      setOpen={()=>setOpenSingleProduct(false)}
      content={
        <>
        <SingleProduct productDetails={openSingleProduct}  onClick={()=>setOpenSingleProduct(false)} />
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

export default Products