
//import SelectInput from "@components/SelectInput";

import SelectInput from "@/components/SelectInput";


const ChallengeReward = () => {
  return (
    <div className="border rounded-lg bg-white">
      <div className="w-full p-5 border-b">
        <p className="text-[#252525] text-[14px] font-medium">Reward</p>
      </div>

      <div className="w-full px-7 space-y-3 mt-3">
        <SelectInput
          label="Reward type"
          options={[
            { value: "type1", label: "Type 1" },
            { value: "type2", label: "Type 2" },
            { value: "type3", label: "Type 3" },
            { value: "type4", label: "Type 4" },
          ]}
        />
        <SelectInput
          label="Reward value"
          options={[
            { value: "type1", label: "Type 1" },
            { value: "type2", label: "Type 2" },
            { value: "type3", label: "Type 3" },
            { value: "type4", label: "Type 4" },
          ]}
        />
      </div>
    </div>
  );
};

export default ChallengeReward;
