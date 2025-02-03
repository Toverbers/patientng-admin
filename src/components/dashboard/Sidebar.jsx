import Image from "next/image";
import React from "react";
import Actions from "./Actions";
import BottomAction from "./BottomAction";

const Sidebar = () => {
  return (
    <div className="hidden h-full w-[300px] border-r pt-5 md:flex flex-col">
      <div className="flex items-center px-5">
        <Image
          src="/svg/logo.svg"
          width={0}
          height={0}
          alt="logo"
          className="w-4 h-4 md:w-7 md:h-7"
        />
        <h1 className="md:text-2xl font-bold ml-2 text-[#004146]">iPatient</h1>
      </div>

      <Actions />

      <BottomAction />
    </div>
  );
};

export default Sidebar;
