import React from "react";

interface IdensityIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const DensityIcon: React.FC<IdensityIconProps> = ({
  width="14px",
  height="12px",
  fillColor="currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.75 3H0.25V0H13.75V3ZM13.75 4.5H0.25V7.5H13.75V4.5ZM13.75 9H0.25V12H13.75V9Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default DensityIcon;
