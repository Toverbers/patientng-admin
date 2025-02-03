import React from "react";

const FilterButton = () => {
  return (
    <div className="flex text-nowrap text-[#252525] text-[14px] font-medium space-x-2 border rounded-md px-3 py-2 items-center">
      <p>Filter</p>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0572 2H2.94281C2.42211 2 2 2.42211 2 2.94281C2 3.19286 2.09933 3.43266 2.27614 3.60948L5.41421 6.74755C5.78929 7.12262 6 7.63133 6 8.16176V10.7639C6 11.5215 6.428 12.214 7.10557 12.5528L9.27639 13.6382C9.60884 13.8044 10 13.5627 10 13.191V8.16176C10 7.63133 10.2107 7.12262 10.5858 6.74755L13.7239 3.60948C13.9007 3.43266 14 3.19286 14 2.94281C14 2.42211 13.5779 2 13.0572 2Z"
          stroke="#252525"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default FilterButton;
