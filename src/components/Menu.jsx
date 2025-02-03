import  { useState } from 'react';
import { Link } from 'react-router-dom';

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
import { Settings } from 'lucide-react';
import { MdArrowDropDown } from 'react-icons/md';

const Menu = () => {
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
    { name: 'Learning Hub', path: '/learning-hub', icon: <LearningHubIcon
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor= "#68727D"
      
    /> },
   
    { name: 'Website Settings', path: '/settings', icon: <Settings
      className="w-4 h-4 md:w-5 md:h-5"
      strokeColor="#68727D"
    /> },
  ];

  return (
    <>
      <div className="hidden h-full w-[300px] border-r pt-5 md:flex flex-col justify-between">

      <div className='h-[85vh] overflow-y-auto'>
      <div className="flex items-center px-5">
        <img
          src="/assets/svg/logo.svg"
          alt="logo"
          className="w-4 h-4 md:w-7 md:h-7"
        />
        <h1 className="md:text-2xl font-bold ml-2 text-[#004146]">iPatient</h1>
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
        
        <li className="text-gray-500 hover:border hover:border-l-lime-600 hover:border-l-2 hover:bg-[#F2F6F7] p-3 px-5" onClick={toggleDropdown}>
            <div  className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GameIcon
                className="w-4 h-4 md:w-5 md:h-5"
                strokeColor="#68727D"
              />
                <span >Games</span>
              </div>
              
              <MdArrowDropDown  className="w-6 h-6 md:w-7 md:h-7"
                  strokeColor="#68727D" />

            </div>
            {/* DROPDOWN MENU */}
            {dropdownOpen && (
               <ul className='flex flex-col p-0 m-0'>
               <li className="text-gray-500 hover:border-l-green-500 hover:border-l-2 hover:bg-[#F2F6F7] p-3 px-5">
                <Link to='/quiz' className="flex items-center space-x-2">
                <QuizIcon
                  className="w-4 h-4 md:w-5 md:h-5"
                  strokeColor="#68727D"
                />
                  <span >Quiz</span>
                </Link>
              </li>
              <li className="text-gray-500 hover:border-l-green-500 hover:border-l-2 hover:bg-[#F2F6F7] p-3 px-5">
                <Link to='/admins' className="flex items-center space-x-2">
                <RaffleIcon
                  className="w-4 h-4 md:w-5 md:h-5"
                  strokeColor="#68727D"
                />
                  <span >Raffle</span>
                </Link>
              </li>
               <li className="text-gray-500 hover:border-l-green-500 hover:border-l-2 hover:bg-[#F2F6F7] p-3 px-5">
                <Link to='/prices' className="flex items-center space-x-2">
                <GameIcon
                  className="w-4 h-4 md:w-5 md:h-5"
                  strokeColor="#68727D"
                />
                  <span >Prices</span>
                </Link>
              </li>
             </ul>
            )}
            


          </li>

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
  );
};

export default Menu;
