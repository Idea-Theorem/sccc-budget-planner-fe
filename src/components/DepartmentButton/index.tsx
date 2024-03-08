import React from 'react';
import "./index.scss";

interface DepartmentButtonProps {
    iconColor: string;
    buttonText: string;
}

const DepartmentButton: React.FC<DepartmentButtonProps> = ({ iconColor, buttonText }) => {
  return (
    <div className='btn-wrap'>
        <button className='dboard-btn'>
          <span className={`icon ${iconColor}`}></span>
          {buttonText}
        </button>
    </div>
  );
};

export default DepartmentButton;
