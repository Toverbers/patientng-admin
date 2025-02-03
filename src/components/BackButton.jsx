import { useNavigate } from "react-router-dom";


const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center space-x-2 text-[#252525] text-[14px] font-medium px-4 py-2 bg-white rounded w-min"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6667 8H4.00001M7.33334 4L3.80474 7.5286C3.54439 7.78894 3.54439 8.21106 3.80474 8.4714L7.33334 12"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <p>Back</p>
    </button>
  );
};

export default BackButton;
