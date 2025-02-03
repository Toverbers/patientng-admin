import React from "react";

const ChallengeIcon = ({ className, strokeColor }) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.75 19.25L4.02315 14.6667M4.02315 14.6667L6.96037 4.09265C7.18079 3.29915 7.90328 2.75 8.72682 2.75H13.2732C14.0967 2.75 14.8192 3.29915 15.0396 4.09265L17.7222 13.75M4.02315 14.6667H12.0185M11 19.25L12.0185 14.6667M12.0185 14.6667L12.2222 13.75M12.2222 13.75H17.7222M12.2222 13.75L14.6667 3.66667M17.7222 13.75L19.25 19.25M11 8.25L9.23091 10.0326C9.16379 10.1002 9.05496 10.1002 8.98784 10.0326L8.25 9.28913"
        stroke={strokeColor}
        stroke-width="1.67"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default ChallengeIcon;
