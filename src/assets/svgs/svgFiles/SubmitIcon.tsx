import React from "react";

interface SubmitIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const SubmitIcon: React.FC<SubmitIconProps> = ({
  width="14px",
  height="18px",
  fillColor="currentColor",
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
        d="M8.66683 0.666668H2.00016C1.0835 0.666668 0.34183 1.41667 0.34183 2.33333L0.333496 15.6667C0.333496 16.5833 1.07516 17.3333 1.99183 17.3333H12.0002C12.9168 17.3333 13.6668 16.5833 13.6668 15.6667V5.66667L8.66683 0.666668ZM12.0002 15.6667H2.00016V2.33333H7.8335V6.5H12.0002V15.6667ZM3.66683 11.5083L4.84183 12.6833L6.16683 11.3667V14.8333H7.8335V11.3667L9.1585 12.6917L10.3335 11.5083L7.0085 8.16667L3.66683 11.5083Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default SubmitIcon;
