import React from "react";

interface ArrowleftIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const ArrowleftIcon: React.FC<ArrowleftIconProps> = ({ width="8px", height="12px", fillColor="currentColor" }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.70492 10.59L3.12492 6L7.70492 1.41L6.29492 0L0.294922 6L6.29492 12L7.70492 10.59Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ArrowleftIcon;
