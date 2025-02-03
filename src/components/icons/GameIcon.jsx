import React from "react";

const GameIcon = ({ className, strokeColor }) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.4165 16.4433V5.55643C6.4165 4.03537 8.16201 3.17588 9.36764 4.10329L16.4441 9.54671C17.3981 10.2806 17.3981 11.7191 16.4441 12.453L9.36764 17.8964C8.16201 18.8238 6.4165 17.9643 6.4165 16.4433Z"
        stroke={strokeColor}
        stroke-width="1.67"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default GameIcon;
