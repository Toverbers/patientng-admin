import React from 'react';

const CustomTableHead = ({ headers }) => (
  <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
    <tr className=''>
      {headers.map((header, index) => (
        <th key={index} className="px-6 py-4 ">{header}</th>
      ))}
    </tr>
  </thead>
);

export default CustomTableHead;