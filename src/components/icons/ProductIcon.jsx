import React from "react";

const ProductIcon = ({ className, strokeColor }) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.16802 6.63663L3.88403 7.06624L3.16802 6.63663ZM4.64551 4.17415L5.36152 4.60375L4.64551 4.17415ZM17.3545 4.17415L16.6385 4.60375V4.60375L17.3545 4.17415ZM18.832 6.63663L18.116 7.06624L18.832 6.63663ZM16.0197 2.83689L15.7657 3.63232L15.7657 3.63232L16.0197 2.83689ZM16.6726 3.20655L17.224 2.57949L17.224 2.57949L16.6726 3.20655ZM5.3274 3.20655L5.87878 3.83361L5.87878 3.83361L5.3274 3.20655ZM5.98029 2.83689L5.72627 2.04147L5.72627 2.04147L5.98029 2.83689ZM19.226 7.54521L18.4019 7.67999L18.4019 7.67999L19.226 7.54521ZM19.1204 7.16402L19.8963 6.85563L19.8963 6.85562L19.1204 7.16402ZM18.249 19.0502L17.8699 18.3062L17.8699 18.3062L18.249 19.0502ZM19.0502 18.249L18.3062 17.8699L18.3062 17.8699L19.0502 18.249ZM2.94982 18.249L2.20583 18.6281L2.20583 18.6281L2.94982 18.249ZM3.75102 19.0502L4.1301 18.3062L4.1301 18.3062L3.75102 19.0502ZM2.77404 7.54521L1.94999 7.41042L2.77404 7.54521ZM2.87962 7.16402L2.10366 6.85563H2.10366L2.87962 7.16402ZM3.66667 6.49833C3.20551 6.49833 2.83167 6.87218 2.83167 7.33333C2.83167 7.79449 3.20551 8.16833 3.66667 8.16833V6.49833ZM18.3333 8.16833C18.7945 8.16833 19.1683 7.79449 19.1683 7.33333C19.1683 6.87218 18.7945 6.49833 18.3333 6.49833V8.16833ZM14.585 11C14.585 10.5388 14.2112 10.165 13.75 10.165C13.2888 10.165 12.915 10.5388 12.915 11H14.585ZM9.085 11C9.085 10.5388 8.71116 10.165 8.25 10.165C7.78884 10.165 7.415 10.5388 7.415 11H9.085ZM1.915 8.14582V16.3167H3.585V8.14582H1.915ZM5.68333 20.085H16.3167V18.415H5.68333V20.085ZM20.085 16.3167V8.14582H18.415V16.3167H20.085ZM3.88403 7.06624L5.36152 4.60375L3.92951 3.74454L2.45201 6.20703L3.88403 7.06624ZM7.16083 3.585H14.8392V1.915H7.16083V3.585ZM16.6385 4.60375L18.116 7.06624L19.548 6.20703L18.0705 3.74454L16.6385 4.60375ZM14.8392 3.585C15.5 3.585 15.6469 3.59438 15.7657 3.63232L16.2737 2.04147C15.8483 1.90562 15.3896 1.915 14.8392 1.915V3.585ZM18.0705 3.74454C17.7873 3.27253 17.5593 2.87437 17.224 2.57949L16.1212 3.83361C16.2149 3.91596 16.2985 4.03712 16.6385 4.60375L18.0705 3.74454ZM15.7657 3.63232C15.8968 3.67419 16.0179 3.74272 16.1212 3.83361L17.224 2.57949C16.9477 2.33656 16.6242 2.15339 16.2737 2.04147L15.7657 3.63232ZM5.36152 4.60375C5.7015 4.03712 5.78514 3.91596 5.87878 3.83361L4.77602 2.57949C4.44067 2.87437 4.21271 3.27253 3.92951 3.74454L5.36152 4.60375ZM7.16083 1.915C6.61037 1.915 6.15167 1.90562 5.72627 2.04147L6.23431 3.63232C6.3531 3.59438 6.50002 3.585 7.16083 3.585V1.915ZM5.87878 3.83361C5.98215 3.74272 6.10319 3.67419 6.23431 3.63232L5.72627 2.04147C5.37582 2.15339 5.0523 2.33656 4.77602 2.57949L5.87878 3.83361ZM20.085 8.14582C20.085 7.86964 20.0875 7.63972 20.05 7.41042L18.4019 7.67999C18.4125 7.74467 18.415 7.81717 18.415 8.14582H20.085ZM18.116 7.06624C18.2851 7.34805 18.3202 7.41151 18.3444 7.47242L19.8963 6.85562C19.8105 6.63971 19.6901 6.44385 19.548 6.20703L18.116 7.06624ZM20.05 7.41042C20.0189 7.22049 19.9674 7.03448 19.8963 6.85563L18.3444 7.47241C18.371 7.53933 18.3903 7.60893 18.4019 7.67999L20.05 7.41042ZM16.3167 20.085C16.8163 20.085 17.2412 20.0856 17.5888 20.0572C17.9461 20.0281 18.2946 19.9641 18.6281 19.7942L17.8699 18.3062C17.8111 18.3361 17.7069 18.372 17.4528 18.3928C17.189 18.4144 16.8438 18.415 16.3167 18.415V20.085ZM18.415 16.3167C18.415 16.8438 18.4144 17.189 18.3928 17.4528C18.372 17.7069 18.3361 17.8111 18.3062 17.8699L19.7942 18.6281C19.9641 18.2946 20.0281 17.9461 20.0572 17.5888C20.0856 17.2412 20.085 16.8163 20.085 16.3167H18.415ZM18.6281 19.7942C19.1301 19.5383 19.5383 19.1301 19.7942 18.6281L18.3062 17.8699C18.2105 18.0577 18.0577 18.2105 17.8699 18.3062L18.6281 19.7942ZM1.915 16.3167C1.915 16.8163 1.91435 17.2412 1.94275 17.5888C1.97195 17.9461 2.03595 18.2946 2.20583 18.6281L3.69381 17.8699C3.66387 17.8111 3.62796 17.7069 3.6072 17.4528C3.58565 17.189 3.585 16.8438 3.585 16.3167H1.915ZM5.68333 18.415C5.15617 18.415 4.81102 18.4144 4.5472 18.3928C4.29312 18.372 4.18885 18.3361 4.1301 18.3062L3.37194 19.7942C3.70535 19.9641 4.05386 20.0281 4.41121 20.0572C4.75881 20.0856 5.18373 20.085 5.68333 20.085V18.415ZM2.20583 18.6281C2.46165 19.1301 2.86986 19.5383 3.37194 19.7942L4.1301 18.3062C3.94225 18.2105 3.78953 18.0577 3.69381 17.8699L2.20583 18.6281ZM3.585 8.14582C3.585 7.81717 3.58751 7.74467 3.59809 7.67999L1.94999 7.41042C1.91249 7.63972 1.915 7.86964 1.915 8.14582H3.585ZM2.45201 6.20703C2.30992 6.44385 2.18947 6.63971 2.10366 6.85563L3.65559 7.47242C3.67979 7.41151 3.71494 7.34805 3.88403 7.06624L2.45201 6.20703ZM3.59809 7.67999C3.60971 7.60893 3.62899 7.53933 3.65559 7.47242L2.10366 6.85563C2.03258 7.03448 1.98106 7.22049 1.94999 7.41042L3.59809 7.67999ZM3.66667 8.16833H18.3333V6.49833H3.66667V8.16833ZM12.915 11C12.915 12.0576 12.0576 12.915 11 12.915V14.585C12.9799 14.585 14.585 12.9799 14.585 11H12.915ZM11 12.915C9.94237 12.915 9.085 12.0576 9.085 11H7.415C7.415 12.9799 9.02006 14.585 11 14.585V12.915Z"
        fill={strokeColor}
      />
    </svg>
  );
};

export default ProductIcon;
