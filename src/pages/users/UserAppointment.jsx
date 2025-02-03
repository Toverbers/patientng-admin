import Table from '@/components/table/Table'
import React, { useState } from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';

const customTabs = ['all Appointment', 'upcomming appointment', 'past appointment'];

const UserAppointment = () => {
    const [activeTab, setActiveTab] = useState(0);

  const columns = ['Logo', 'Name', 'Facility Name', 'Facility Location', 'Date', , 'Facility Type', 'Status',  'Actions'];
 const data = [
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Jane Smith',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Mike Johnson',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Jane Smith',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Mike Johnson',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    {
      profile: '/assets/png/avatar2.png',
      name: 'Jane Smith',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'inactive',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Mike Johnson',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      facilityName: 'ABC Healthcare center',
      facilityLocation: 'John Doe',
      facilityType: 'John Doe',
      date: 'Sat 23 Feb 2024 2pm',
      status: 'active',
    },
    
  ];

    const renderRow = (item) => (
        <>
          <td className="py-2 px-4 border-b"> <img src={`/assets/png/avatar2.png`} alt="Profile" className="rounded-full w-10 h-10" /></td>
          <td className="py-2 px-4 border-b">{item?.name}</td>
          <td className="py-2 px-4 border-b">{item?.facilityName}</td>
          <td className="py-2 px-4 border-b">{item?.facilityLocation}</td>
          <td className="py-2 px-4 border-b">{item?.date}</td>
          <td className="py-2 px-4 border-b">{item?.facilityType}</td>
          <td className="py-2 px-4 border-b">{item?.status}</td>
          <td className="py-2 px-4 border-b">
          <div className='flex items-center space-x-3'>
          <Link to={`/users/hhhhg`} className="bg-transparent text-gray-500 px-2 py-1 rounded cursor-pointer" onClick={() => {
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
    <div>
    <Table
        data={data}
        headers={columns}
        renderRow={renderRow}
        //tabs={customTabs} // Pass tabs here if needed
    />
    </div>
    </>
  )
}

export default UserAppointment