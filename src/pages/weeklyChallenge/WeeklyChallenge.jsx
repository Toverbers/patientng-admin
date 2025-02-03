import ButtonComponent from '@/components/ButtonComponent'
import SideSheetComponent from '@/components/SideSheetComponent';
import Table from '@/components/table/Table';
import { Badge } from '@/components/ui/badge';
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import NewChallenge from './NewChallenge';
import { useDailyChallengeStore } from '@/store/dailyChallengeStore';
import moment from 'moment';
import SingleChallenge from './SingleChallenge';
import LoadingSpinner from '@/components/LoadingSpinner';
import SideMenuSheet from '@/components/SideMenuSheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import PaginationComponent from '@/components/table/PaginationComponent';


const customTabs = ['all', 'upcomming appointment', 'past appointment'];
const WeeklyChallenge = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const [openNewChallenge, setNewOpenChallenge] = useState(false);
    const [openSingleChallenge, setOpenSingleChallenge] = useState(false);
    const {getAllChallenge, challengeData, deleteChallenge, loading, totalPages,  currentPage, itemsPerPage, setPage} = useDailyChallengeStore()

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  useEffect(() => {
   getAllChallenge(currentPage, itemsPerPage)
  },[currentPage, itemsPerPage])

  const handleDeleteChallenge = async (id) => {
    await deleteChallenge({id: id})
    getAllChallenge()
  }

  console.log("CHALLENGE DATA", challengeData)


  const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpenAppointment = async (item) => {
      setOpenSingleChallenge(item)
    }

  const columns = [ 'Challenge Name', 'Duration', 'End Date', 'Status', 'Perticipation/ completion rate', 'Actions'];
 

  const renderRow = (item) => (
    <>
      
      <td className="py-2 px-4 border-b">{item?.challenge_name}</td>
      <td className="py-2 px-4 border-b">{item?.day_of_participation}</td>
      <td className="py-2 px-4 border-b">{ moment(item?.challenge_end_date).format('DD MMMM YYYY')}</td>
      
      <td className="py-2 px-4 border-b"><Badge className={`${item?.status === 'Active' ? 'bg-[#3864FF12] text-[#3864FF]' : 'bg-[#FFEFEE] text-[#E33B32]' } text-sm rounded-[30px] `} >{item?.status === 'Active' ? 'Active' : 'Inactive' }</Badge></td>
      <td className="py-2 px-4 border-b text-center">{item?.perticipation} <Badge className={`${item?.completion < 50  ? 'bg-[#E9F8F1] text-[#27B973]' : 'bg-[#FFEFEE] text-[#E33B32]' } text-sm rounded-[30px] `} >{item?.completion}%</Badge></td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <span  className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {handleOpenAppointment(item)}}><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></span>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span className='cursor-pointer' onClick={()=> handleDeleteChallenge(item?._id) }><MdOutlineDelete className='text-red-500' size={22} /></span> 
      </div>
      </td>
    </>
  );


  return (
    <>
     <div className="bg-[#FAFBFC] grow p-5 overflow-x-auto flex flex-col">
      <div className="md:flex justify-between items-center w-full">
        <div className="flex space-x-2 items-center">
        <span className='md:hidden cursor-pointer' onClick={()=>setOpenMenu(true)}><HamburgerMenuIcon /></span>
          <p className="text-[#252525] md:text-[28px] font-semibold">
            Weekly Challenges
          </p>
        </div>

        <div className="mt-3 md:mt-0 w-full md:w-[200px]">
          <ButtonComponent
            onClick={()=>setNewOpenChallenge(true)}
            title="Create new challenge"
            //icon="/svg/plus_white.svg"
          />
        </div>
      </div>
      {loading === true ? <LoadingSpinner /> : 
      <>
       <div className="w-full bg-white border p-3 mt-4 rounded-2xl grow flex flex-col">
      <Table
         data={challengeData}
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
      </>}
      

     {/*  {showAdd ? <ChallengeSidebar closeSideBar={toggleShowAdd} /> : <></>} */}
     <SideSheetComponent
      open={openNewChallenge}
      setOpen={()=>setNewOpenChallenge(false)}
      content={
        <>
        <NewChallenge onClick={()=>setNewOpenChallenge(false)} />
        </>
      }
      />
     <SideSheetComponent
      open={openSingleChallenge}
      setOpen={()=>setOpenSingleChallenge(false)}
      content={
        <>
        <SingleChallenge onClick={()=>setOpenSingleChallenge(false)} challengeDetails={openSingleChallenge} />
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

export default WeeklyChallenge