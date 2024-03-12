import React from "react";

interface DateIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const DateIcon: React.FC<DateIconProps> = ({ width="19", height="21", fillColor="currentColor" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 2.5H15.5V0.5H13.5V2.5H5.5V0.5H3.5V2.5H2.5C1.39 2.5 0.51 3.4 0.51 4.5L0.5 18.5C0.5 19.6 1.39 20.5 2.5 20.5H16.5C17.6 20.5 18.5 19.6 18.5 18.5V4.5C18.5 3.4 17.6 2.5 16.5 2.5ZM16.5 18.5H2.5V8.5H16.5V18.5ZM16.5 6.5H2.5V4.5H16.5V6.5ZM6.5 12.5H4.5V10.5H6.5V12.5ZM10.5 12.5H8.5V10.5H10.5V12.5ZM14.5 12.5H12.5V10.5H14.5V12.5ZM6.5 16.5H4.5V14.5H6.5V16.5ZM10.5 16.5H8.5V14.5H10.5V16.5ZM14.5 16.5H12.5V14.5H14.5V16.5Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default DateIcon;
