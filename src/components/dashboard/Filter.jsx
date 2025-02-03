import React from "react";
import FilterItem from "./FilterItem";

const Filter = () => {
  return (
    <div className="w-full md:w-min border rounded-lg mt-4 flex items-center bg-white h-10">
      <FilterItem title="1 Year" />
      <div className="h-full w-0.5 bg-gray-200"></div>
      <FilterItem title="30 days" />
      <div className="h-full w-0.5 bg-gray-200"></div>
      <FilterItem title="7 days" />
      <div className="h-full w-0.5 bg-gray-200"></div>
      <FilterItem title="Today" />
    </div>
  );
};

export default Filter;
