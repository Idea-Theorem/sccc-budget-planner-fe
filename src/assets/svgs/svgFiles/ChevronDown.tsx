import React from "react";

interface IChevronDownProps {
  width: string;
  height: string;
  fillColor: string;
}

const ChevronDown: React.FC<IChevronDownProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.175 0.912109L5 4.72878L8.825 0.912109L10 2.08711L5 7.08711L0 2.08711L1.175 0.912109Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ChevronDown;

