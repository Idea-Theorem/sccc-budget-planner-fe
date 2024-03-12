import React from "react";

interface ActionIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
}

const ActionIcon: React.FC<ActionIconProps> = ({
  width = "10px",
  height = "8px",
  fillColor ="currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.175 7.0876L5 3.27093L8.825 7.0876L10 5.9126L5 0.912598L0 5.9126L1.175 7.0876Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ActionIcon;
