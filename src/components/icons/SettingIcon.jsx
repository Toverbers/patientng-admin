import React from "react";

const SettingIcon = ({ className, strokeColor }) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.6669 11.0002C14.6669 13.0252 13.0253 14.6668 11.0002 14.6668C8.97517 14.6668 7.33355 13.0252 7.33355 11.0002C7.33355 8.97512 8.97517 7.3335 11.0002 7.3335C13.0253 7.3335 14.6669 8.97512 14.6669 11.0002Z"
        stroke={strokeColor}
        stroke-width="1.67"
      />
    </svg>
  );
};

export default SettingIcon;
