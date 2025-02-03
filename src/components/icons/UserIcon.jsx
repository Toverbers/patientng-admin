import React from "react";

const UserIcon = ({ className, strokeColor }) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_5058_13632)">
        <path
          d="M11.0002 13.2918C14.1643 13.2918 16.7293 10.7268 16.7293 7.56266C16.7293 4.39853 14.1643 1.8335 11.0002 1.8335C7.83603 1.8335 5.271 4.39853 5.271 7.56266C5.271 10.7268 7.83603 13.2918 11.0002 13.2918ZM11.0002 13.2918C5.93755 13.2918 1.8335 16.3699 1.8335 20.1668M11.0002 13.2918C16.0628 13.2918 20.1668 16.3699 20.1668 20.1668"
          stroke={strokeColor}
          stroke-width="1.67"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5058_13632">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserIcon;
