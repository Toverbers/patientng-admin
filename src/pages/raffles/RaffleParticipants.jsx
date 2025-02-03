import Table from '@/components/table/Table';
import { Badge } from '@/components/ui/badge';
import moment from 'moment';
import React from 'react'
import { MdOutlineDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';

const RaffleParticipants = () => {

    const columns = ["First name", "Last name", "Email Address", "Ticket Numbers", "purchase Date", "wining Status", ];
 const data = [
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      purchaseDate: 'Bimbo Doe',
      age: 28,
      email: 'john@example.com',
      status: 'Won',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Jane Smith',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      age: 34,
      email: 'jane@example.com',
      status: 'Won',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Mike Johnson',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      age: 45,
      email: 'mike@example.com',
      status: 'Lost',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      age: 28,
      email: 'john@example.com',
      status: 'Lost',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Jane Smith',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      age: 34,
      email: 'jane@example.com',
      status: 'Won',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Mike Johnson',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      age: 45,
      email: 'mike@example.com',
      status: 'Won',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'John Doe',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      age: 28,
      email: 'john@example.com',
      status: 'Lost',
    },
    {
      profile: '/assets/png/avatar2.png',
      name: 'Jane Smith',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      age: 34,
      email: 'jane@example.com',
      status: 'Lost',
    },
    {
      profile: 'https://via.placeholder.com/40',
      name: 'Mike Johnson',
      lastName: 'Bimbo Doe',
      ticketNo: '5',
      age: 45,
      email: 'mike@example.com',
      status: 'Won',
    },
   
  ];

  const renderRow = (item) => (
    <>
     
      <td className="py-2 px-4 border-b">{item?.name}</td>
      <td className="py-2 px-4 border-b">{item?.lastName}</td>
      <td className="py-2 px-4 border-b">{item?.email}</td>
      <td className="py-2 px-4 border-b text-center">{item?.ticketNo}</td>
      <td className="py-2 px-4 border-b">{ moment(item?.end_date).format('DD MMMM YYYY')}</td>
      <td className="py-2 px-4 border-b"><Badge className={`rounded-[15px] py-[5px] px-[10px] text-sm ${item?.status === 'Won' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500' }`}>{item?.status}</Badge></td>
      
    </>
  ); 
  return (
    <div className=" bg-white rounded-2xl border border-gray-100 overflow-x-auto px-5">
       
    <div>
        {/* <Tabs tabs={customTabs} activeTab={activeTab} onChangeTab={setActiveTab} />  */}
        <Table
        data={data}
        headers={columns}
        renderRow={renderRow}
        //tabs={customTabs} // Pass tabs here if needed
        //tabs={{ activeTab, onChangeTab: setActiveTab }}
    />
    </div>

    </div>
  )
}

export default RaffleParticipants