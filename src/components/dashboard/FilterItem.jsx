import React from "react";

const FilterItem = ({ title }) => {
  return (
    <div className="grow flex items-center justify-center px-3 hover:text-[#05CC7E] text-[#68727D]">
      <p className="text-[15px] whitespace-nowrap text-nowrap font-semibold">
        {title}
      </p>
    </div>
  );
};

export default FilterItem;
