import React from "react";

interface IArrowDownProps {
  width?: string;
  height?: string;
  fillColor?: string;
  classname?: string
}

const ArrowDown: React.FC<IArrowDownProps> = ({
  width = "9",
  height = "6",
  fillColor ='currentColor',
  classname= "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
    >
      <path
        d="M256 417.9l17-17L465 209l17-17L448 158.1l-17 17-175 175L81 175l-17-17L30.1 192l17 17L239 401l17 17z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ArrowDown;
