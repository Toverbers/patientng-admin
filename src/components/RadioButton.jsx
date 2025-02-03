import React from "react";

const RadioButton = ({ id, label }) => {
  return (
    <div className="flex items-center mb-2 mr-3">
      <input
        id={id}
        type="radio"
        value=""
        className="w-4 h-4 text-[#05CC7E] bg-gray-100 border-gray-300 rounded focus:ring-[#05CC7E] focus:ring-2"
      />
      <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
