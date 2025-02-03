"use client";

import Image from "next/image";

const GreenButton = ({ label, icon, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="text-white text-[14px] font-medium border bg-[#05CC7E] px-3 py-2 rounded-md flex space-x-2 items-center justify-center w-full whitespace-nowrap"
    >
      {icon && (
        <Image
          src={icon}
          width={20}
          height={20}
          alt="icon"
          className="w-5 h-5"
        />
      )}
      <p>{label}</p>
    </button>
  );
};

export default GreenButton;
