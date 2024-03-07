import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonTitle?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  buttonTitle,
  ...rest
}) => {
  return (
    <button className={className} {...rest}>
      {buttonTitle}
    </button>
  );
};

export default ButtonComponent;
