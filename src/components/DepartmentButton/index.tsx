import React from "react";
import "./index.scss";

interface DepartmentButtonProps {
  iconColor: string;
  buttonText: string;
}

const DepartmentButton: React.FC<DepartmentButtonProps> = ({
  iconColor,
  buttonText,
}) => {
  return (
    <button className="department_btn">
      <span className={`department_icon ${iconColor}`}></span>
      {buttonText}
    </button>
  );
};

export default DepartmentButton;
