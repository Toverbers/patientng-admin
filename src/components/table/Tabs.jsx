import React from 'react';

const Tabs = ({ tabs, activeTab, onChangeTab }) => (
  <div className="flex space-x-1 flex-wrap">
    {tabs?.map((tab, index) => (
      <button
        key={index}
        className={`px-4 py-2 ${activeTab === 'index' ? 'border-b-gray-300 text-green-500' : 'text-gray-500'} font-medium inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 capitalize`}
        onClick={() => onChangeTab(index)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs