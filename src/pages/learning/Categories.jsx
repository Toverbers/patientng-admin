import BackButton from '@/components/BackButton'
import ButtonComponent from '@/components/ButtonComponent';
import SideSheetComponent from '@/components/SideSheetComponent';
import Table from '@/components/table/Table'
import { useEffect, useState } from 'react';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import NewAuthor from './NewAuthor';
import UpdateAuthor from './UpdateAuthor';
import NewCategory from './NewCategory';
import UpdateCategory from './UpdateCategory';
import { UseBlogStore } from '@/store/blogStore';

const Categories = () => {

    const navigate = useNavigate()
    const [openNewCategory, setOpenNewCategory] = useState(false)
    const [openUpdateCategory, setOpenUpdateCategory] = useState(false)

    const {getAllCategory, categoryData, deleteCategory} = UseBlogStore()

    useEffect(() => {
      getAllCategory()
    },[])

    const handleDelete = async (id) => {
      await deleteCategory({id: id})
      getAllCategory()
    }

    console.log("ALL CATEGORIES", categoryData)

    const columns = ['ID','Category Name', 'Actions'];
 const data = [
    {
        id: '1',
        title: 'medical Doctor',
      },
    {
        id: '2',
        title: 'medical Doctor',
      },
    {
        id: '3',
        title: 'medical Doctor',
      },
    {
        id: '4',
        title: 'medical Doctor',
      },
    {
        id: '5',
        title: 'medical Doctor',
      },
    {
        id: '6',
        title: 'medical Doctor',
      },
 ]

 const renderRow = (item) => (
    <>
      <td className="py-2 px-4 border-b max-w-[300px]"> <p>{item?._id}</p></td>
      <td className="py-2 px-4 border-b">{item?.name}</td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <button className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("open update category", item)
        setOpenUpdateCategory(item)
    }

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></button>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span><MdOutlineDelete className='text-red-500 cursor-pointer' size={22} onClick={()=>  handleDelete(item?._id)} /></span> 
      </div>
      </td>
    </>
  ); 
  return (
    <div className="p-5 bg-[#FAFBFC] grow overflow-x-auto flex flex-col">
      <div className="flex space-x-2 mb-2 justify-between">
        <div className='flex space-x-3 items-center'>
            <BackButton />
            <p className="text-[#252525] text-[28px] font-semibold grow">Categories </p>
            </div>
        

        <ButtonComponent
            onClick={()=> setOpenNewCategory(true)}
            title="New Category"
            buttonStyle="max-w-[150px] md:max-w-[180px] text-sm"
            //icon="/svg/plus_white.svg"
          />
      </div>

      <div className=" bg-white rounded-2xl border border-gray-100 overflow-x-auto px-3">
        {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */}
            <Table
                data={categoryData}
                headers={columns}
                renderRow={renderRow}
                //tabs={customTabs} // Pass tabs here if needed
                //tabs={{ activeTab, onChangeTab: setActiveTab }}
            />
            </div>
      
      <SideSheetComponent
        open={openNewCategory}
        setOpen={()=> setOpenNewCategory(false)}
        content={
            <>
              <NewCategory onClick={()=> setOpenNewCategory(false)} />
            </>
        }
       />
      <SideSheetComponent
        open={openUpdateCategory}
        setOpen={()=> setOpenUpdateCategory(false)}
        content={
            <>
              <UpdateCategory categoryDetails={openUpdateCategory} onClick={()=> setOpenUpdateCategory(false)} />
            </>
        }
       />
      </div>
  )
}

export default Categories