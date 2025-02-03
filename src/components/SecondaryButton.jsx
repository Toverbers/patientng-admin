"use client";

import Image from "next/image";

const SecondaryButton = ({ label, icon, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="text-[14px] font-medium border text-[#004146] px-3 py-2 rounded-md flex space-x-2 items-center justify-center w-full whitespace-nowrap"
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

export default SecondaryButton;
