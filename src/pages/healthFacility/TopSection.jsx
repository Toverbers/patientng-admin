//import BackButton from "@components/BackButton";
import React from "react";
/* import DeactivateButton from "./DeactivateButton";
import RejectButton from "./RejectButton";
import ApproveButton from "./ApproveButton"; */
import BackButton from "@/components/BackButton";
import ButtonComponent from "@/components/ButtonComponent";

const TopSection = () => {
  return (
    <div className="p-5 bg-white border-b">
      <BackButton />

      <div className="md:flex space-x-2">
        <p className="text-[#252525] ml-2 md:ml-0 md:text-[28px] font-semibold grow">
          View facility information
        </p>
        <div className="flex flex-col mt-2 space-y-2 md:flex-row md:mt-0 md:space-y-0 space-x-0 md:space-x-2">
          <ButtonComponent title="Deactivate Facility" buttonStyle="text-[#E33B32] text-[14px] font-medium border border-[#E33B32] px-3 py-2 rounded-md bg-transparent hover:bg-[#E33B32] hover:text-white" />
          <ButtonComponent title="Reject Facility" buttonStyle="text-[#fff] text-[14px] font-medium border border-[#E33B32] px-3 py-2 rounded-md bg-[#E33B32] hover:bg-[#E33B32]" />
          <ButtonComponent title="Approve Facility" buttonStyle="text-white text-[14px] font-medium border bg-[#27B973] px-3 py-2 rounded-md hover:bg-none" />
         {/*  <RejectButton />
          <ApproveButton /> */}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
