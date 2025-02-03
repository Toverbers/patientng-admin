"use client";

const DangerButton = ({ label, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="text-white text-[14px] font-medium border bg-[#E33B32] px-3 py-2 rounded-md w-full whitespace-nowrap"
    >
      {label}
    </button>
  );
};

export default DangerButton;
