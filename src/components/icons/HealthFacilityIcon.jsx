import React from "react";

const HealthFacilityIcon = ({ className, strokeColor }) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.6665 19.25H4.58317M4.58317 19.25V5.95C4.58317 4.82989 4.58317 4.26984 4.80116 3.84202C4.9929 3.46569 5.29887 3.15973 5.67519 2.96799C6.10301 2.75 6.66307 2.75 7.78317 2.75H14.2165C15.3366 2.75 15.8967 2.75 16.3245 2.96799C16.7008 3.15973 17.0068 3.46569 17.1985 3.84202C17.4165 4.26984 17.4165 4.8299 17.4165 5.95V19.25M4.58317 19.25H9.1665M17.4165 19.25H12.8332M17.4165 19.25H18.3332M9.1665 19.25V15.35C9.1665 14.7899 9.1665 14.5099 9.2755 14.296C9.37137 14.1078 9.52435 13.9549 9.71251 13.859C9.92643 13.75 10.2065 13.75 10.7665 13.75H11.2332C11.7932 13.75 12.0732 13.75 12.2872 13.859C12.4753 13.9549 12.6283 14.1078 12.7242 14.296C12.8332 14.5099 12.8332 14.7899 12.8332 15.35V19.25M9.1665 19.25H12.8332"
        stroke={strokeColor}
        stroke-width="1.67"
        stroke-linecap="round"
      />
      <path
        d="M8.25 6.4165H9.16667"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M8.25 10.0835H9.16667"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12.8335 6.4165H13.7502"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12.8335 10.0835H13.7502"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default HealthFacilityIcon;
