import React from "react";

const UploadField = ({ id, label, value, ...props }) => {
  return (
    <div>
      {label && (
        <p className="text-[#252525] text-[14px] font-medium pb-2">{label}</p>
      )}
      <div className="flex items-center justify-center w-full mb-4">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 py-2"
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="32" height="32" rx="6" fill="#F9F9F9" />
            <path
              d="M9.83398 18.6703V21.7437C9.83398 22.2095 10.0096 22.6562 10.3221 22.9856C10.6347 23.315 11.0586 23.5 11.5007 23.5H21.5007C21.9427 23.5 22.3666 23.315 22.6792 22.9856C22.9917 22.6562 23.1673 22.2095 23.1673 21.7437V18.6703M16.5013 18.4521L16.5013 8.5M16.5013 8.5L12.6917 12.3026M16.5013 8.5L20.3108 12.3026"
              stroke="#68696F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[#252525] text-[14px]">
            Drag and Drop or choose your file for upload
          </p>
          <p className="text-[#68727D] text-[14px]">JPG, PNG or SVG</p>
          <input id={id} type="file" className="hidden" {...props} />
        </label>
        {/* {value? <img src={value} alt="image" /> : ''} */}
      </div>
    </div>
  );
};

export default UploadField;
