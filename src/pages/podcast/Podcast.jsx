import CustomRow from '@/components/table/CustomRow';
import Table from '@/components/table/Table';
import Tabs from '@/components/table/Tabs';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { useUserStore } from '@/store/usersStore';
import { Badge } from '@/components/ui/badge';
import LoadingSpinner from '@/components/LoadingSpinner';
import PaginationComponent from '@/components/table/PaginationComponent';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SideMenuSheet from '@/components/SideMenuSheet';
import AdminHeader from '@/components/AdminHeader';
import { UsePodcastStore } from '@/store/podcastStore';
import ButtonComponent from '@/components/ButtonComponent';
import moment from 'moment';


const customTabs = ['all', 'Active', 'Inactive'];


const Podcasts = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)
    const {getAllPodcast, podcastData, deletePodcast} = UsePodcastStore()
    const navigate = useNavigate()

    //console.log("SET PAGES", setPage)


    useEffect(() => {
      getAllPodcast()
    },[])

    const handleDeletePodcast = async (id) =>{
      await deletePodcast({id: id})
      getAllPodcast()
    }

    console.log("USERS INFORMATION", podcastData)

  const columns = ['Podcast Title ', 'Released date', 'Duration', 'Produced By', 'Status',   'Actions'];


   const renderRow = (item) => (
    <>
    
    <td className="py-2 px-4 border-b"> {item?.title}</td>
      <td className="py-2 px-4 border-b">{moment(item?.releaseDate).format('DD MMMM YYYY')}</td>
      <td className="py-2 px-4 border-b">{item?.duration}</td>
      <td className="py-2 px-4 border-b">{item?.producedBy}</td>
      <td className="py-2 px-4 border-b"><Badge className={`rounded-[15px] py-[5px] px-[10px] text-sm bg-green-100 text-green-600`}>{item?.status}</Badge></td>
      <td className="py-2 px-4 border-b">
      <div className='flex items-center space-x-3'>
      <Link to={`/podcast/${item?._id}`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", item)}

        }><MdOutlineRemoveRedEye className='text-gray-500' size={22} /></Link>
      {/* <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink> */}
      <span className='cursor-pointer'><MdOutlineDelete className='text-red-500' size={22} onClick={()=>handleDeletePodcast(item?._id)} /></span> 
      </div>
      </td>
      
    </>
  ); 

  /* const uniqueStatuses = [...new Set(data.map(item => item.status))];
  const filteredData = activeTab === 0 ? data : data.filter(item => item.status === customTabs[activeTab]); */
  return (
    <>
      <div className='p-5'>
      <AdminHeader
         title="Podcasts"
         //hasBackButton
         content={
          <>
           <div className="flex items-center space-x-3">
          <ButtonComponent
            onClick={()=>{navigate('/podcast-category')}}
            title="Categories"
            buttonStyle="min-w-[150px] md:max-w-[180px] text-sm bg-emerald-500 hover:bg-emerald-600"
            //icon="/svg/plus_white.svg"
          />
          <ButtonComponent
            onClick={()=>{navigate('/new-podcast')}}
            title="New Podcast"
            buttonStyle="min-w-[150px] md:max-w-[180px] text-sm bg-emerald-500 hover:bg-emerald-600"
            //icon="/svg/plus_white.svg"
          />
          </div>
          </>
         } 
        />
      
      
        <div className="w-full bg-white rounded-2xl border border-gray-100 overflow-x-auto overflow-y-auto box-border mt-4">

        {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */}
            <Table
                //data={data}
                data={podcastData}
                headers={columns}
                renderRow={renderRow}
                tabs={customTabs} // Pass tabs here if needed
                //tabs={{ activeTab, onChangeTab: setActiveTab }}
                
            />
            </div>
    </div>
     <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />
    </>
  )
}

export default Podcasts