/* import CheckBox from "@components/CheckBox";
import InputField from "@components/InputField";
import SelectInput from "@components/SelectInput";
import TextField from "@components/TextField";
import React from "react"; */

import CheckBox from "@/components/CheckBox";
import SelectInput from "@/components/SelectInput";

const ChallengeDuration = () => {
  return (
    <div className="border rounded-lg bg-white">
      <div className="w-full p-5 border-b">
        <p className="text-[#252525] text-[14px] font-medium">Duration</p>
      </div>

      <div className="w-full px-7 space-y-3 mt-3">
        <SelectInput
          label="Number of days"
          options={[
            { value: "1", label: "1" },
            { value: "5", label: "5" },
            { value: "10", label: "10" },
            { value: "15", label: "15" },
            { value: "30", label: "30" },
          ]}
        />

        <p className="text-[#252525] text-[14px] font-medium">
          Selects days of participation
        </p>
        <div className="flex flex-wrap">
          <CheckBox label="Monday" />
          <CheckBox label="Tuesday" />
          <CheckBox label="Wednesday" />
          <CheckBox label="Thursday" />
          <CheckBox label="Friday" />
          <CheckBox label="Saturday" />
          <CheckBox label="Sunday" />
        </div>
      </div>
    </div>
  );
};

export default ChallengeDuration;
