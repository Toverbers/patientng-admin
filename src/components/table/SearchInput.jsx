import React from 'react';

const SearchInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    className="py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#27B973] focus:border-[#27B973] block w-full p-2.5 placeholder-[#68727D] text-[16px]"
    placeholder="Search..."
  />
);

export default SearchInput;