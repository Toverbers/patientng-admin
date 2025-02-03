import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/outline';
import { FaTv } from "react-icons/fa6";
import DashboardIcon from './icons/DashboardIcon';
import UserIcon from './icons/UserIcon';
import HealthFacilityIcon from './icons/HealthFacilityIcon';
import AppointmentIcon from './icons/AppointmentIcon';
import ProductIcon from './icons/ProductIcon';
import ChallengeIcon from './icons/ChallengeIcon';
import LearningHubIcon from './icons/LearningHubIcon';
import QuizIcon from './icons/QuizIcon';
import RaffleIcon from './icons/RaffleIcon';
import GameIcon from './icons/GameIcon';
import BottomAction from './dashboard/BottomAction';
import SettingIcon from './icons/SettingIcon';
import { AlignRightIcon, ArrowDownIcon, ArrowRight, BookAIcon, FlagIcon, HeartIcon, MoveDown, RadioIcon, Settings } from 'lucide-react';
import { DropdownMenuIcon } from '@radix-ui/react-icons';
import { MdArrowDropDown } from 'react-icons/md';
import useAuthStore from '@/store/authStore';
import { hasPermission } from '@/utils/roleAuthorization';


const SideMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState()
  const {getMe, myData} = useAuthStore()

  useEffect(()=>{
    getMe()
  },[])

  console.log("ADMIN DATAS", myData)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  /* const menuItems = [
     { name: 'Dashboard', path: '/', icon: <DashboardIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
    { name: 'Users', path: '/users', icon:  <UserIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> }, 
    { name: 'Health facility', path: '/health-facilities', icon: <HealthFacilityIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
    { name: 'Appointments', path: '/appointments', icon: <AppointmentIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
    { name: 'Weekly challenge', path: '/weekly-challenge', icon: <ChallengeIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
    { name: 'Products', path: '/products', icon: <ProductIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
    { name: 'Orders', path: '/orders', icon: <BookAIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor= "#68727D"
      
    /> },
    { name: 'Learning Hub', path: '/learning-hub', icon: <LearningHubIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor= "#68727D"
      
    /> },
    { name: 'Newsletter', path: '/newsletter', icon: <BookAIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor= "#68727D"
      
    /> },
    { name: 'Quiz', path: '/quiz', icon: <QuizIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
    { name: 'Raffles', path: '/raffles', icon: <RaffleIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> }, 
    { name: 'Prices', path: '/prices', icon: <GameIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
    { name: 'Website Settings', path: '/settings', icon: <Settings
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
  ]; */

  return (
    <>
      <div className="hidden h-full w-[300px] border-r pt-5 md:flex flex-col justify-between">

      <div className='h-[85vh] overflow-y-auto'>
      <div className=" px-5">
        <Link to="/" className="flex items-center">
         <img
          src="/assets/svg/logo.svg"
          alt="logo"
          className="w-4 h-4 md:w-7 md:h-7"
        />
        <h1 className="md:text-2xl font-bold ml-2 text-[#004146]">Patient.ng</h1>
        </Link>
      </div>
      
      <nav className=" mt-7">
      <ul className="flex flex-col">
        {/* {menuItems.map((item) => (
          <li key={item.name} className="text-gray-500 hover:border hover:border-l-lime-600 hover:border-l-2 hover:bg-[#F2F6F7] p-3 px-5">
            <Link to={item.path} className="flex items-center space-x-2">
              {item.icon}
              <span >{item.name}</span>
            </Link>
          </li>
        ))} */}
        
        {/* {hasPermission(myData?.userType, ["user", ]) && ( */}
        <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/" className="flex items-center space-x-2">
            <DashboardIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span >Dashboard</span>
            </Link>
          </li>
          {/* )} */}
        
          {hasPermission(myData?.userType, ["admin", "user", ]) && (
        <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/users" className="flex items-center space-x-2">
            <UserIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span>Users</span>
            </Link>
          </li>
           )}
          

        {/* {hasPermission(adminData?.permissions, ["create_user", "read_user", "update_user","delete_user", "all"]) && (
        <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/users" className="flex items-center space-x-2">
            <UserIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span>Users</span>
            </Link>
          </li>
          )} */}
        
        {hasPermission(myData?.userType, ["admin", "crowedfunding", ]) && (
        <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/campaigns" className="flex items-center space-x-2">
            <HeartIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span>Campaigns</span>
            </Link>
          </li>
        )}
          
          {hasPermission(myData?.userType, ["admin", "advocacy", ]) && (
        <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/advocacy" className="flex items-center space-x-2">
            <FlagIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span>Advocacy</span>
            </Link>
          </li>
          )}
        
        
        {/* <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/health-facilities" className="flex items-center space-x-2">
            <HealthFacilityIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span >Health Facility</span>
            </Link>
          </li> */}
         
        
        
        <p className='px-5 text-base font-bold mt-5'>Resources</p>
        
        {hasPermission(myData?.userType, ["admin", "blogger", ]) && (
        <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/blogs" className="flex items-center space-x-2">
            <LearningHubIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span >Blogs</span>
            </Link>
          </li>
        )}
          
        
          {hasPermission(myData?.userType, ["admin", "podcast", ]) && (
        <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/podcasts" className="flex items-center space-x-2">
            <RadioIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span >Podcasts</span>
            </Link>
          </li>
          )}
          
        
        {/* {hasPermission(adminData?.permissions, ["create_newsletter", "read_newsletter", "update_newsletter","delete_newsletter", "all", "create_dashboard"]) && (
        <li className="text-gray-500 hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to="/newsletter" className="flex items-center space-x-2">
            <BookAIcon className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span >Newsletter</span>
            </Link>
          </li>
          )} */}
        
        {hasPermission(myData?.userType, ["admin", ]) && (
        <li className="text-gray-500 hover:border hover:border-l-lime-600 hover:border-l-2 hover:bg-[#F2F6F7] p-3 px-5">
            <Link to="/settings" className="flex items-center space-x-2">
            <Settings className="w-4 h-4 md:w-5 md:h-5" strokeColor="#68727D"/>
              <span >Website Settngs</span>
            </Link>
          </li>
        )}
          

        
        
         <>
          <p className='px-5 text-base font-bold mt-5'>Admins</p>
        
        <li className="text-gray-500 hover:border hover:border-l-emerald-600 hover:border-l-2 hover:bg-[#FAFFFD] p-3 px-5">
            <Link to='/admins' className="flex items-center space-x-2">
            <SettingIcon
              className="w-6 h-6 md:w-6 md:h-6"
              strokeColor="#68727D"
            />
              <span >Admin & Roles</span>
            </Link>
        </li>
         </>
        
      </ul>
    </nav>
      </div>

    <BottomAction data={myData} />
    </div>
    </>
  )
}

export default SideMenu