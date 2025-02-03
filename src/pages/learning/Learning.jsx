import CustomRow from '@/components/table/CustomRow';
import Table from '@/components/table/Table';
import Tabs from '@/components/table/Tabs';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import ButtonComponent from '@/components/ButtonComponent';
import { UseBlogStore } from '@/store/blogStore';
import LoadingSpinner from '@/components/LoadingSpinner';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SideMenuSheet from '@/components/SideMenuSheet';
import PaginationComponent from '@/components/table/PaginationComponent';
import AdminHeader from '@/components/AdminHeader';
import moment from 'moment';


const customTabs = ['all', 'publish', 'draft', 'archived'];

/* const data = [
    { profile: 'Item 1', name: 'Value 1', age: 'Item 1', email: 'Value 1', action: 'Value 1' },
    // More items...
  ]; */

const Learning = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()
    const {getAllBlogs, blogData, loading, totalPages,  currentPage, itemsPerPage, setPage, deleteBlog} = UseBlogStore()


    useEffect(() => {
     getAllBlogs()
    },[])

    const handleDeleteBlog = async (id) =>{
      await deleteBlog({id: id})
      getAllBlogs()
    }

    console.log("ALL BLOGS", blogData)

  const columns = ['Title', 'Author Name', 'Date', 'Likes', 'comments', 'Status',  'Actions'];


   const renderRow = (item) => (
    <>
      <td className="py-2 px-4 border-b max-w-[300px]"> <p>{item?.title}</p></td>
      <td className="py-2 px-4 border-b">{item?.publisher}</td>
      <td className="py-2 px-4 border-b">{moment(item?.createdAt).format('DD MMMM YYYY')}</td>
      <td className="py-2 px-4 border-b">{item?.likes?.length}</td>
      <td className="py-2 px-4 border-b">{item?.comments?.length}</td>
      <td className="py-2 px-4 border-b">{item?.status}</td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <Link to={`/blog/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span className='cursor-pointer'><MdOutlineDelete className='text-red-500' size={22} onClick={()=>handleDeleteBlog(item?._id)} /></span> 
      </div>
      </td>
    </>
  ); 

  const uniqueStatuses = [...new Set(blogData?.map(item => item.status))];
  const filteredData = activeTab === 0 ? blogData : blogData?.filter(item => item?.status === customTabs[activeTab]);
  return (
    <div className='p-4 pt-0'>

        <AdminHeader
         title="Blogs"
         //hasBackButton
         content={
          <>
           <div className="flex items-center space-x-3">
          <ButtonComponent
            onClick={()=>{navigate('/categories')}}
            title="Category"
            buttonStyle="min-w-[150px] md:max-w-[180px] text-sm bg-emerald-500 hover:bg-emerald-600"
            //icon="/svg/plus_white.svg"
          />
          {/* <ButtonComponent
            onClick={()=>{navigate('/authors')}}
            title="Author"
            buttonStyle="max-w-[150px] md:max-w-[180px] text-sm bg-emerald-500 hover:bg-emerald-600"
            //icon="/svg/plus_white.svg"
          /> */}
          <ButtonComponent
            onClick={()=>{navigate('/new-blog')}}
            title="New Blog"
            buttonStyle="min-w-[150px] md:max-w-[180px] text-sm bg-emerald-500 hover:bg-emerald-600"
            //icon="/svg/plus_white.svg"
          />
        </div>
          </>
         } 
        />

        


      
      <>
        <div className=" bg-white rounded-2xl border border-gray-100 overflow-x-auto">
        {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */}
            <Table
                data={blogData}
                headers={columns}
                renderRow={renderRow}
                tabs={customTabs} // Pass tabs here if needed
                //tabs={{ activeTab, onChangeTab: setActiveTab }}
            />
            </div>

{/* <PaginationComponent
currentPage={currentPage}
totalPages={totalPages}
onPageChange={setPage}
/> */}
</>


    <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />
    </div>
  )
}

export default Learning