import React from "react";

interface LoginFormProps {
  value?: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<LoginFormProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Email address"
    />
  );
};

export default TextInput;
