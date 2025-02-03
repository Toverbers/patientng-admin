
import React from "react";

const Attachment = () => {
  return (
    <div className="flex space-x-3 items-center w-full">
      <img src="/assets/svg/pdf.svg" alt="pdf"  />
      <p className="text-[#252525] text-[14px] font-medium grow w-5 h-5">
        Registration.pdf
      </p>
      <button className="flex text-nowrap text-[#252525] text-[14px] font-medium space-x-2 border rounded-md px-3 py-2 items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.93965 8.78134C1.71193 8.28593 1.71193 7.7144 1.93965 7.21899C2.99371 4.92578 5.31104 3.3335 8.00026 3.3335C10.6895 3.3335 13.0068 4.92578 14.0609 7.21899C14.2886 7.7144 14.2886 8.28593 14.0609 8.78134C13.0068 11.0745 10.6895 12.6668 8.00026 12.6668C5.31104 12.6668 2.99371 11.0745 1.93965 8.78134Z"
            stroke="#252525"
            strokeWidth="1.3"
          />
          <path
            d="M10.0003 8.00016C10.0003 9.10473 9.10483 10.0002 8.00026 10.0002C6.89569 10.0002 6.00026 9.10473 6.00026 8.00016C6.00026 6.89559 6.89569 6.00016 8.00026 6.00016C9.10483 6.00016 10.0003 6.89559 10.0003 8.00016Z"
            stroke="#252525"
            strokeWidth="1.3"
          />
        </svg>

        <p>View</p>
      </button>
    </div>
  );
};

export default Attachment;
