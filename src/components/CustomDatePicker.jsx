"use client";

import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const CustomDatePicker = ({ label, onChanged }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("Select Date");

  const handleChange = (selectedDate) => {
    onChanged(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  const options = {
    minDate: new Date(),
    theme: {
      background: "",
      todayBtn: "bg-[#D4A809]",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "text-[#D1D5DB] bg-[#F0F0F0]",
      input: "",
      inputIcon: "",
      selected: "bg-[#D4A809]",
    },
  };

  return (
    <div className="relative w-full">
      <p className="-mt-5 font-medium text-[#181B20] text-[15px]">{label}</p>
      <div
        className="flex space-x-3 items-center w-full px-5 py-3 border rounded-lg cursor-pointer hover:bg-[#F0F0F0]"
        onClick={() => setShow(!show)}
      >
        <p className="text-[#656A70] text-[15px] grow">{date}</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 8.33317H17.5M6.66667 4.99984V1.6665M13.3333 4.99984V1.6665M7.83333 18.3332H12.1667C14.0335 18.3332 14.9669 18.3332 15.68 17.9699C16.3072 17.6503 16.8171 17.1403 17.1367 16.5131C17.5 15.8001 17.5 14.8667 17.5 12.9998V8.6665C17.5 6.79966 17.5 5.86624 17.1367 5.1532C16.8171 4.526 16.3072 4.01606 15.68 3.69648C14.9669 3.33317 14.0335 3.33317 12.1667 3.33317H7.83333C5.96649 3.33317 5.03307 3.33317 4.32003 3.69648C3.69282 4.01606 3.18289 4.526 2.86331 5.1532C2.5 5.86624 2.5 6.79966 2.5 8.6665V12.9998C2.5 14.8667 2.5 15.8001 2.86331 16.5131C3.18289 17.1403 3.69282 17.6503 4.32003 17.9699C5.03307 18.3332 5.96649 18.3332 7.83333 18.3332Z"
            stroke="#68727D"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <Datepicker
        classNames="absolute -mt-10"
        onChange={(date) => {
          // formart date as MM/DD/YYYY
          const formattedDate = `${
            date.getMonth() + 1
          }/${date.getDate()}/${date.getFullYear()}`;

          setDate(formattedDate);
          handleChange(formattedDate);
        }}
        show={show}
        setShow={handleClose}
        options={options}
      >
        <div></div>
      </Datepicker>
    </div>
  );
};

export default CustomDatePicker;
