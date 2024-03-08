import React from "react";

interface SelectIconProps {
  width: string;
  height: string;
  fillColor: string;
}

const SelectIcon: React.FC<SelectIconProps> = ({ width, height, fillColor }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L5 5L10 0H0Z" fill={fillColor} />
    </svg>
  );
};

export default SelectIcon;
