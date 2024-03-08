import React from "react";
import Select, { Option, SelectProps } from "rc-select";
import "rc-select/assets/index.css";
import classnames from "classnames";
import "./index.scss";
import { ChevronDown } from "../../assets/svgs";

interface ExtendedSelectProps extends SelectProps<string> {
  option?: (string | { name: string })[];
  defaultValue?: string;
  label?: string;
  onChange?: (e: any) => void;
  error?: string;
  touched?: boolean;
  className?: string;
  from?: string;
  showSearch?: boolean;
}

const Dropdown: React.FC<ExtendedSelectProps> = (props) => {
  const {
    option,
    defaultValue,
    onChange,
    error,
    touched,
    className,
    showSearch = false,
  } = props;

  return (
    <div
      className={classnames(className, "select_dropdown", {
        "has-error": error && touched,
      })}
    >
      <Select
        defaultValue={defaultValue}
        showSearch={showSearch}
        notFoundContent={null}
        suffixIcon={<ChevronDown width="10px" height="10px" fillColor="#000" />}
        onChange={onChange}
        className={classnames({ select_error: error && touched })}
      >
        {option?.map((item, index) => (
          <Option
            key={index}
            value={typeof item === "string" ? item : item.name}
          >
            {typeof item === "string" ? item : item.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
