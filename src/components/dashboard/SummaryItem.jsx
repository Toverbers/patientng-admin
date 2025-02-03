import React from "react";

const SummaryItem = ({ title, value, className }) => {
  return (
    <div className={`grow ${className}`}>
      <p className="text-[15px] text-[#68727D]">{title}</p>
      <p className="md:text-[24px] text-[#252525] font-bold">{value}</p>
    </div>
  );
};

export default SummaryItem;
