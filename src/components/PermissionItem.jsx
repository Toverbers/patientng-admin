
import { useState } from "react";
import CheckBox from "./CheckBox";

const PermissionItem = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full space-y-2">
      <div onClick={toggleOpen} className="flex space-x-3 cursor-pointer">
        <img
          src={isOpen ? "/assets/svg/up_arrow.svg" : "/assets/svg/down_arrow.svg"}
          
          alt="checkbox"
          className="w-5 h-5"
        />
        <p className="grow text-[#232323] text-[16px] font-medium">{title}</p>
        <CheckBox label="Select all" />
      </div>

      {isOpen && (
        <div className="flex items-center justify-between w-full">
          <CheckBox label="View" />
          <CheckBox label="Create" />
          <CheckBox label="Edit" />
          <CheckBox label="Delete" />
        </div>
      )}
    </div>
  );
};

export default PermissionItem;
