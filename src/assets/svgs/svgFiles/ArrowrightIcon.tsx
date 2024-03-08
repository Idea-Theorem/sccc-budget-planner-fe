import React from "react";

interface ArrowrightIconProps {
  width: string;
  height: string;
  fillColor: string;
}

const ArrowrightIcon: React.FC<ArrowrightIconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ArrowrightIcon;
