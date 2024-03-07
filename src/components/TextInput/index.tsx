import React, { InputHTMLAttributes } from "react";
import "./index.scss";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return (
    <div className="input-wrapper">
      <input className="form-control" placeholder="Email address" {...rest} />
    </div>
  );
};

export default TextInput;
