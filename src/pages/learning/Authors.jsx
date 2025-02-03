import BackButton from '@/components/BackButton'
import ButtonComponent from '@/components/ButtonComponent';
import SideSheetComponent from '@/components/SideSheetComponent';
import Table from '@/components/table/Table'
import { useEffect, useState } from 'react';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import NewAuthor from './NewAuthor';
import UpdateAuthor from './UpdateAuthor';
import { UseBlogStore } from '@/store/blogStore';

const Authors = () => {

    const navigate = useNavigate()
    const [openNewAuthor, setOpenNewAuthor] = useState(false)
    const [openUpdateAuthor, setOpenUpdateAuthor] = useState(false)

    const {getAllAuthor, authorData} = UseBlogStore()

    useEffect(() => {
      getAllAuthor()
    },[])

    const handleOpenUpdate = async (id) => {
      setOpenUpdateAuthor(id)
      console.log("hello details", id)
    }

    console.log("ALL THE AUTHORS", authorData)

    const columns = ['ID', 'Name', 'Title', 'Actions'];
 const data = [
    {
        id: '1',
        firstName: 'John Doe',
        lastName: 'John Doe',
        image: '10-11-2024',
        title: 'medical Doctor',
      },
    {
        id: '2',
        firstName: 'John Doe',
        lastName: 'John Doe',
        image: '10-11-2024',
        title: 'medical Doctor',
      },
    {
        id: '3',
        firstName: 'John Doe',
        lastName: 'John Doe',
        image: '10-11-2024',
        title: 'medical Doctor',
      },
    {
        id: '4',
        firstName: 'John Doe',
        lastName: 'John Doe',
        image: '10-11-2024',
        title: 'medical Doctor',
      },
    {
        id: '5',
        firstName: 'John Doe',
        lastName: 'John Doe',
        image: '10-11-2024',
        title: 'medical Doctor',
      },
    {
        id: '6',
        firstName: 'John Doe',
        lastName: 'John Doe',
        image: '10-11-2024',
        title: 'medical Doctor',
      },
 ]

 const renderRow = (item) => (
    <>
      <td className="py-2 px-4 border-b max-w-[300px]"> <p>{item?._id}</p></td>
      <td className="py-2 px-4 border-b">{item?.author_name}</td>
      <td className="py-2 px-4 border-b">{item?.author_title}</td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <button className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => handleOpenUpdate(item)}>
          <MdOutlineRemoveRedEye className='text-gray-500' size={22} /></button>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span><MdOutlineDelete className='text-red-500' size={22} /></span> 
      </div>
      </td>
    </>
  ); 
  return (
    <div className="p-5 bg-[#FAFBFC] grow overflow-x-auto flex flex-col">
      <div className="flex space-x-2 mb-2 justify-between">
        <div className='flex space-x-3 items-center'>
            <BackButton />
            <p className="text-[#252525] text-[28px] font-semibold grow">Authors </p>
            </div>
        

        <ButtonComponent
            onClick={()=> setOpenNewAuthor(true)}
            title="Author"
            buttonStyle="max-w-[150px] md:max-w-[180px] text-sm"
            //icon="/svg/plus_white.svg"
          />
      </div>

      <div className=" bg-white rounded-2xl border border-gray-100 overflow-x-auto px-3">
        {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */}
            <Table
                //data={data}
                data={authorData}
                headers={columns}
                renderRow={renderRow}
                //tabs={customTabs} // Pass tabs here if needed
                //tabs={{ activeTab, onChangeTab: setActiveTab }}
            />
            </div>
      
      <SideSheetComponent
        open={openNewAuthor}
        setOpen={()=> setOpenNewAuthor(false)}
        content={
            <>
              <NewAuthor onClick={()=> setOpenNewAuthor(false)} />
            </>
        }
       />
      <SideSheetComponent
        open={openUpdateAuthor}
        setOpen={()=> setOpenUpdateAuthor(false)}
        content={
            <>
              <UpdateAuthor authorDetails={openUpdateAuthor} onClick={()=> setOpenUpdateAuthor(false)} />
            </>
        }
       />
      </div>
  )
}

export default Authors