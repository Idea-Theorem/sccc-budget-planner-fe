import React from "react";

interface ExportIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const ExportIcon: React.FC<ExportIconProps> = ({
  width="14px",
  height="14px",
  fillColor="currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 7V12.25H1.75V7H0.25V12.25C0.25 13.075 0.925 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V7H12.25ZM7.75 7.5025L9.6925 5.5675L10.75 6.625L7 10.375L3.25 6.625L4.3075 5.5675L6.25 7.5025V0.25H7.75V7.5025Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ExportIcon;
