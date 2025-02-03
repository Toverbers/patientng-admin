import React from 'react';

const CustomTableBody = ({ data, renderRow }) => (
  <tbody>
    {data?.map((item, index) => (
      <tr className='bg-white border-b hover:bg-gray-50' key={index}>{renderRow(item, index)}</tr>
    ))}
  </tbody>
);

export default CustomTableBody;