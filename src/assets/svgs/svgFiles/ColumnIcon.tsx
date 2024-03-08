import React from "react";

interface ColumnIconProps {
  width: string;
  height: string;
  fillColor: string;
}

const ColumnIcon: React.FC<ColumnIconProps> = ({ width, height, fillColor }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.0025 0.75V11.25H4.9975V0.75H9.0025ZM9.7525 11.25H13.75V0.75H9.7525V11.25ZM4.2475 11.25V0.75H0.25V11.25H4.2475Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ColumnIcon;
