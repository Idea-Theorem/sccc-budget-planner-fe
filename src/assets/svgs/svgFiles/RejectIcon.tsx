import React from "react";

interface RejectIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const RejectIcon: React.FC<RejectIconProps> = ({
  width="12px",
  height="12px",
  fillColor="currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8332 1.3415L10.6582 0.166504L5.99984 4.82484L1.3415 0.166504L0.166504 1.3415L4.82484 5.99984L0.166504 10.6582L1.3415 11.8332L5.99984 7.17484L10.6582 11.8332L11.8332 10.6582L7.17484 5.99984L11.8332 1.3415Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default RejectIcon;
