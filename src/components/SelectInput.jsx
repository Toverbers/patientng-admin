import React from "react";

const SelectInput = ({ id, label, options, onChange, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <p className="text-[#252525] text-[14px] font-medium">{label}</p>
      )}
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#27B973] focus:border-[#27B973] block w-full p-2.5 sm:text-sm mb-5 h-12"
        onChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
