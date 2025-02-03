
import InputField from "@/components/InputField";
import TextField from "@/components/TextField";
import React from "react";

const ChallengeDescription = () => {
  return (
    <div className="border rounded-lg bg-white">
      <div className="w-full p-5 border-b">
        <p className="text-[#252525] text-[14px] font-medium">Challenge Name</p>
      </div>

      <div className="w-full px-7 space-y-3 mt-3">
        <InputField title="Challenge name" placeholder="3e.g 10,000 steps" />
        <InputField title="Challenge intro message" placeholder="Abayomi" />
        <TextField title="Challenge description" placeholder="Input Text" />
      </div>
    </div>
  );
};

export default ChallengeDescription;
