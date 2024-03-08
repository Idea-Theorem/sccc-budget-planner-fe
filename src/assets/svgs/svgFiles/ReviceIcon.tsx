import React from "react";

interface ReviceIconProps {
  width: string;
  height: string;
  fillColor: string;
}

const ReviceIcon: React.FC<ReviceIconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.444824 4.08333H9.61149V5.75H0.444824V4.08333ZM0.444824 2.41667H9.61149V0.75H0.444824V2.41667ZM0.444824 9.08333H6.27816V7.41667H0.444824V9.08333ZM12.9532 6.475L13.5448 5.88333C13.8698 5.55833 14.3948 5.55833 14.7198 5.88333L15.3115 6.475C15.6365 6.8 15.6365 7.325 15.3115 7.65L14.7198 8.24167L12.9532 6.475ZM12.3615 7.06667L7.94482 11.4833V13.25H9.71149L14.1282 8.83333L12.3615 7.06667Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ReviceIcon;
