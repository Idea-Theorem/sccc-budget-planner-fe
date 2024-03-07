import { IconType } from "../../../Interface/index";
import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import "./index.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  rightIcon?: IconType;
  leftIcon?: IconType;
  variant?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  customeClass?: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const {
    text,
    leftIcon,
    rightIcon,
    customeClass,
    variant,
    className,
    size,
    ...rest
  } = props;

  const prefixCls = customeClass || "btn";
  const classes = classNames(className, size, prefixCls, {
    [`${prefixCls}-${variant ?? "default"}`]: true,
    [`${prefixCls}-primary`]: variant === "primary",
    [`${prefixCls}-secondary`]: variant === "secondary",
    [`${prefixCls}-error`]: variant === "error",
    [`${prefixCls}-warning`]: variant === "warning",
    [`${prefixCls}-info`]: variant === "info",
    [`${prefixCls}-success`]: variant === "success",
  });

  return (
    <>
      <button className={classes} {...rest}>
        {leftIcon && leftIcon}
        {text} {rightIcon && rightIcon}
      </button>
    </>
  );
};

export default ButtonComponent;
