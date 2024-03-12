import React from "react";

interface PlusIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ width="12px", height="12px", fillColor="currentColor" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8337 6.83333H6.83366V11.8333H5.16699V6.83333H0.166992V5.16666H5.16699V0.166664H6.83366V5.16666H11.8337V6.83333Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default PlusIcon;
