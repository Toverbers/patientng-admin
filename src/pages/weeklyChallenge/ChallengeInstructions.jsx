import InputField from "@/components/InputField";


const ChallengeInstructions = () => {
  return (
    <div className="border rounded-lg bg-white">
      <div className="w-full p-5 border-b">
        <p className="text-[#252525] text-[14px] font-medium">
          Challenge Instructions
        </p>
      </div>

      <div className="w-full px-7 space-y-3 mt-3 pb-3">
        <InputField placeholder="Enter instruction 1" />
        <InputField placeholder="Enter instruction 2" />
        <InputField placeholder="Enter instruction 3" />

        <button className="flex space-x-2 items-center bg-[#F2F6F7] px-3 py-1.5 rounded text-[#004146] text-[14px] font-semibold">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00008 2.6665V13.3332M13.3334 7.99984L2.66675 7.99984"
              stroke="#05CC7E"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p>Add instruction</p>
        </button>
      </div>
    </div>
  );
};

export default ChallengeInstructions;
