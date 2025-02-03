import React, { useState } from 'react';
import SearchInput from './SearchInput';
import FilterButton from './FilterButton';
import Pagination from './Pagination';
import CustomTableHead from './CustomTableHead';
import CustomTableBody from './CustomTableBody';
import Tabs from './Tabs';

const Table = ({ data, headers, renderRow, tabs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [sortDirection, setSortDirection] = useState('asc');

  const toggleSortDirection = () => {
    setSortDirection(prevDirection => (prevDirection === 'asc' ? 'dsc' : 'asc'));
  };

  const sortedData = data?.sort((a, b) => {
    const nameA = a.name?.toLowerCase();
    const nameB = b.name?.toLowerCase();
    if (sortDirection === 'asc') {
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    } else {
      return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
    }
  });

  const filteredData = data?.filter(item =>
    (!tabs || tabs[activeTab] === 'all' || item?.status === tabs[activeTab]) &&
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  )
    .slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <div className="">
      <div className='flex flex-col md:flex-row justify-between items-center'>
      {tabs && (<div className='flex-1'>
        <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} />
      </div>)}
      <div className="flex flex-1 space-x-4 my-4">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <FilterButton sortDirection={sortDirection} onClick={toggleSortDirection} />
      </div>
      </div>
      <table className="w-full text-left rtl:text-right text-gray-500">
        <CustomTableHead headers={headers} />
        
        <CustomTableBody data={filteredData} renderRow={renderRow} />
        {filteredData?.length === 0 && (
            
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center" colSpan={headers?.length}>
                <p className='text-3xl'>No data available</p>
              </td>
            </tr>
          )}
      </table>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(data?.length / 10)} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Table;
