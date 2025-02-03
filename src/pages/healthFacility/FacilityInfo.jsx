
import React from "react";

import SelectInput from "@/components/SelectInput";
import InputField from "@/components/InputField";
import Attachment from "./Attachment";

const FacilityInfo = () => {
  return (
    <div className="bg-white rounded-xl border p-3 mt-3 flex flex-col space-y-3">
      <p className="text-[#252525] text-[16px] font-medium border-b w-full pb-2">
        Facility information
      </p>

      <div className="px-2 w-full">
        <div className="w-full md:flex md:space-x-4 items-center">
          <SelectInput
            id="facility_type"
            label="Facility type"
            options={[
              { value: "hospital", label: "Hospital" },
              { value: "clinic", label: "Clinic" },
              { value: "pharmacy", label: "Pharmacy" },
            ]}
          />
          <InputField title="RC Number" placeholder="RC 11111111" />
        </div>
        <InputField title="Facility name" placeholder="ABC Health center" />
        <InputField title="Address" placeholder="ABC Health center" />
        <div className="w-full md:flex md:space-x-4 items-center">
          <SelectInput
            id="state"
            label="State"
            options={[
              { value: "abia", label: "Abia" },
              { value: "lagos", label: "Lagos" },
              { value: "benue", label: "Benue" },
            ]}
          />
          <SelectInput
            id="lga"
            label="LGA"
            options={[
              { value: "ikeja", label: "Ikeja" },
              { value: "surulere", label: "Surulere" },
              { value: "yaba", label: "Yaba" },
            ]}
          />
        </div>
      </div>

      <div className="p-2 w-full border bg-[#FAFBFC] rounded-xl">
        <p className="text-[#68727D] text-[12px] uppercase font-medium">
          Attached files
        </p>

        <div className="md:flex w-full space-y-2 md:space-y-0 md:space-x-4">
          <Attachment />
          <Attachment />
        </div>
      </div>
    </div>
  );
};

export default FacilityInfo;
