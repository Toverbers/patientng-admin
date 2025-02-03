import PaginationComponent from '@/components/table/PaginationComponent';
import Table from '@/components/table/Table'
import { usePagesStore } from '@/store/pagesStore';
import React, { useEffect } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AllPages = () => {

  const {getAllPage, pageData, deletePage, totalPages,  currentPage, itemsPerPage, setPage} = usePagesStore()

  useEffect(()=> {
    getAllPage(currentPage, itemsPerPage)
  },[currentPage, itemsPerPage])

  const handleDeletePage = async (id) => {
   await deletePage({id:id})
   getAllPage()
  }

    const columns = ['Name', 'Description', 'Slug',  'Actions'];
  
    
       const renderRow = (item) => (
        <>
          <td className="py-2 px-4 border-b max-w-[300px]"> <p>{item?.name}</p></td>
          <td className="py-2 px-4 border-b"><div className='mt-8' dangerouslySetInnerHTML={{__html: item?.description.substring(0, 100)}}></div></td>
          <td className="py-2 px-4 border-b">{item?.createdAt}</td>
          <td className="py-2 px-4 border-b">
          <div className='flex items-center space-x-3'>
          <Link to={`/learning/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
            console.log("hello", item)}
    
            }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
          {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
          <span onClick={()=> handleDeletePage(item?._id)}><MdOutlineDelete className='text-red-500' size={22} /></span> 
          </div>
          </td>
        </>
      ); 
  return (
    <div>
         <div className=" bg-white rounded-2xl border border-gray-100 overflow-x-auto">
        {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */}
            <Table
                data={pageData}
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
    </div>
  )
}

export default AllPages