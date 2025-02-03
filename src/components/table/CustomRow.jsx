import React from 'react';
import { Link } from 'react-router-dom';

const CustomRow = (row, rowIndex) => (
  <tr key={rowIndex}>
    <td className="py-2 px-4 border-b">
      <img src={row.Profile} alt="Profile" className="rounded-full w-10 h-10" />
    </td>
    <td className="py-2 px-4 border-b">{row.Name}</td>
    <td className="py-2 px-4 border-b">{row.Age}</td>
    <td className="py-2 px-4 border-b">
      <a href={`mailto:${row.Email}`} className="text-blue-500">{row.Email}</a>
    </td>
    <td className="py-2 px-4 border-b flex space-x-2">
      <Link to={`/users/hhhhg`} className="bg-lime-900 text-white px-2 py-1 rounded cursor-pointer" onClick={() => {
        console.log("hello", row)}

        }>Edit</Link>
      <buttonLink className="bg-red-500 text-white px-2 py-1 rounded">Delete</buttonLink>
    </td>
  </tr>
);

export default CustomRow;