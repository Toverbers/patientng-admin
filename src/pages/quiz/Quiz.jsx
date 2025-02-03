import ButtonComponent from '@/components/ButtonComponent'
import SideSheetComponent from '@/components/SideSheetComponent';
import Table from '@/components/table/Table'
import { Badge } from '@/components/ui/badge';
import { useQuizStore } from '@/store/quizStore';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import NewQuiz from './NewQuiz';
import Questions from './Questions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SideMenuSheet from '@/components/SideMenuSheet';
import PaginationComponent from '@/components/table/PaginationComponent';


const customTabs = ['all', 'Active', 'Inactive', 'Completed'];
const Quiz = () => {
    const [openNewQuiz, setOpenNewQuiz] = useState(false)
  const {getAllQuiz, quizData, loading, deleteQuiz, totalPages,  currentPage, itemsPerPage, setPage} = useQuizStore()
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(()=> {
    getAllQuiz(currentPage, itemsPerPage)
  },[currentPage, itemsPerPage])

const handleDeleteQuiz = async (id) => {
   await deleteQuiz({id: id})
   getAllQuiz()
}
const handleOpenQuiz = async (id) => {
        navigate('/single-quiz', {state:{info:id}})
}

    const columns = ['Title', 'Number of Questions', 'Participants',  'Status', 'Actions'];



  const renderRow = (item) => (
    <>
     
      <td className="py-2 px-4 border-b">{item?.title}</td>
      <td className="py-2 px-4 border-b">{item?.number_of_questions}</td>
      <td className="py-2 px-4 border-b">{item?.number_of_attempts}</td>
   
      <td className="py-2 px-4 border-b"><Badge className={`rounded-[15px] py-[5px] px-[10px] text-sm ${item?.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500' }`}>{item?.status}</Badge></td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <span className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        handleOpenQuiz(item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></span>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span className='cursor-pointer' onClick={()=>handleDeleteQuiz(item?._id)}><MdOutlineDelete className='text-red-500' size={22} /></span> 
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
          <p className="text-[#252525] md:text-[28px] font-semibold">Quiz</p>
        </div>

        <div className="mt-3  flex md:mt-0 w-full flex-1 space-x-3 justify-end">
         
          <ButtonComponent
            title="Create Quiz"
            buttonStyle="w-auto min-w-[200px]"
            icon="/assets/svg/plus_white.svg"
            //onClick={()=> setOpenNewQuiz(true)}
            onClick={()=> {navigate('/new-quiz')}}
          />
        </div>
      </div>

      <div className="w-full bg-white border p-3 mt-4 rounded-2xl grow flex flex-col">
      <Table
            //data={data}
            data={quizData}
            headers={columns}
            renderRow={renderRow}
            tabs={customTabs} // Pass tabs here if needed
            //tabs={{ activeTab, onChangeTab: setActiveTab }}
        />
      </div>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
        />

       <SideSheetComponent
            open={openNewQuiz}
            setOpen={()=>setOpenNewQuiz(false)}
            sheetStyle="md:w-[500px] md:max-w-[500px] p-0"
            content={
              <>
              <NewQuiz onClick={()=>setOpenNewQuiz(false)} />
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

export default Quiz