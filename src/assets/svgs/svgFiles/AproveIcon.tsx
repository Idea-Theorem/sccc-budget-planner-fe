import React from "react";

interface AproveIconProps {
  width: string;
  height: string;
  fillColor: string;
}

const AproveIcon: React.FC<AproveIconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33268 9.24984L1.83268 5.74984L0.666016 6.9165L5.33268 11.5832L15.3327 1.58317L14.166 0.416504L5.33268 9.24984Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default AproveIcon;
