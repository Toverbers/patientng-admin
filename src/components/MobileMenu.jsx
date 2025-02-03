import React, { useState } from 'react';
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
import { AlignRightIcon, ArrowDownIcon, ArrowRight, BookAIcon, MoveDown, Settings } from 'lucide-react';
import { DropdownMenuIcon } from '@radix-ui/react-icons';
import { MdArrowDropDown } from 'react-icons/md';


const MobileMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <DashboardIcon
      className="w-4 h-4 md:w-5 md:h-5"
      //strokeColor={pathname.includes("dashboard") ? "#004146" : "#68727D"}
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
    
    { name: 'Blogs', path: '/learning-hub', icon: <LearningHubIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor= "#68727D"
      
    /> },
    /* { name: 'Newsletter', path: '/newsletter', icon: <BookAIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor= "#68727D"
      
    /> }, */
   
    { name: 'Website Settings', path: '/settings', icon: <Settings
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
  ];

  return (
    <>
      <div className="h-full w-full border-r pt-5 md:flex flex-col justify-between overflow-y-auto">

      <div className=''>
      <div className="flex items-center px-5">
        <img
          src="/assets/svg/logo.svg"
          alt="logo"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <h1 className="text-3xl font-bold ml-2 text-[#004146]">Patient.ng</h1>
      </div>
      
      <nav className=" mt-7">
      <ul className="flex flex-col">
        {menuItems.map((item) => (
          <li key={item.name} className="text-gray-500 hover:border hover:border-l-lime-600 hover:border-l-2 hover:bg-[#F2F6F7] p-3 px-5">
            <Link to={item.path} className="flex items-center space-x-2">
              {item.icon}
              <span >{item.name}</span>
            </Link>
          </li>
          
        ))}


          <p className='px-5 text-base font-bold'>Admins</p>
        <li className="text-gray-500 hover:border hover:border-l-lime-600 hover:border-l-2 hover:bg-[#F2F6F7] p-3 px-5">
            <Link to='/admins' className="flex items-center space-x-2">
            <SettingIcon
              className="w-6 h-6 md:w-6 md:h-6"
              strokeColor="#68727D"
            />
              <span >Admin & Roles</span>
            </Link>
          </li>
      </ul>
    </nav>
      </div>

    <BottomAction />
    </div>
    </>
  )
}

export default MobileMenu