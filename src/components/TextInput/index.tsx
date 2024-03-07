import React from "react";
import './index.scss'

interface LoginFormProps {
  value?: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<LoginFormProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <input
        className="form-control"
        value={value}
        onChange={handleChange}
        placeholder="Email address"
      />
    </div>
  );
};

export default TextInput;
