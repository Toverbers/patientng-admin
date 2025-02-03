import ButtonComponent from '@/components/ButtonComponent';
import SideSheetComponent from '@/components/SideSheetComponent';
import Table from '@/components/table/Table';
import { Badge } from '@/components/ui/badge';
import { useRaffleStore } from '@/store/raffleStore';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NewRaffle from './newRaffle';
import LoadingSpinner from '@/components/LoadingSpinner';
import SideMenuSheet from '@/components/SideMenuSheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import PaginationComponent from '@/components/table/PaginationComponent';


const customTabs = ['all', 'Active', 'Inactive', 'Completed'];
const Raffles = () => {
  const [openNewRaffle, setOpenNewRaffle] = useState(false)
  const {getAllRaffle, raffleData, loading, totalPages,  currentPage, itemsPerPage, setPage} = useRaffleStore()
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(()=> {
    getAllRaffle(currentPage, itemsPerPage)
  },[currentPage, itemsPerPage])

  console.log("ALL RAFFLES HERE", raffleData)

   // const columns = ['Profile', 'Name', 'Age', 'Email', 'Status',  'Actions'];
    const columns = ["Raffle name", "No of Participants", "Ticket price", "Prize", "Start Date", "End Date", "Status", "Actions" ];


  const renderRow = (item) => (
    <>
     
      <td className="py-2 px-4 border-b">{item?.raffle_name}</td>
      <td className="py-2 px-4 border-b">{item?.number_of_participant}</td>
      <td className="py-2 px-4 border-b">{item?.ticket_price}</td>
      <td className="py-2 px-4 ">
      <div className='flex space-x-1 items-center'>
        {item?.raffle_price?.map((row, index) =>(
          <Badge key={index} className={`rounded-[5px] text-[10px]`}>{row}</Badge>
        ))}
        </div>
        </td>
      <td className="py-2 px-4 border-b">{ moment(item?.start_date).format('DD MMMM YYYY')}</td>
      <td className="py-2 px-4 border-b">{ moment(item?.end_date).format('DD MMMM YYYY')}</td>
      <td className="py-2 px-4 border-b"><Badge className={`rounded-[15px] py-[5px] px-[10px] text-sm ${item?.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500' }`}>{item?.status}</Badge></td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <Link to={`/raffles/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span><MdOutlineDelete className='text-red-500' size={22} /></span> 
      </div>
      </td>
    </>
  ); 


  return (
    <>
    {loading === true ? <LoadingSpinner /> :
     <div className='p-5'>
     <div className="md:flex justify-between items-center w-full ">
        <div className="flex space-x-2 items-center">
        <span className='md:hidden cursor-pointer' onClick={()=>setOpenMenu(true)}><HamburgerMenuIcon /></span>
          <p className="text-[#252525] md:text-[28px] font-semibold">
            Raffles
          </p>
        </div>

        <div className="mt-3 md:mt-0 w-full md:w-[200px]">
          <ButtonComponent
            onClick={()=>setOpenNewRaffle(true)}
            title="Create new Raffle"
            //icon="/svg/plus_white.svg"
          />
        </div>
      </div>

        <div className="w-full bg-white rounded-2xl border border-gray-100 overflow-x-auto overflow-y-auto">
        {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */}
        <Table
            //data={data}
            data={raffleData}
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
            open={openNewRaffle}
            setOpen={()=>setOpenNewRaffle(false)}
            sheetStyle="md:w-[700px] md:max-w-[700px] p-0"
            content={
              <>
              <NewRaffle onClick={()=>setOpenNewRaffle(false)} />
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

export default Raffles