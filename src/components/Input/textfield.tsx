import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type TextFieldVariants = "standard" | "filled" | "outlined";

interface ITextFields {
  label?: string;
  variant?: TextFieldVariants;
  value?: string;
  disabled?: any;
  onDoubleClick?: any;
  onChange?: any;
  placeholder?: string;
  type?: string;
  name?: string;
  helperText?: any;
  size?: any;
  error?: any;
  onBlur?: any;
  autoFocus?: boolean;
  className?: string;
}

const TextFields: React.FC<ITextFields> = ({
  label,
  variant,
  value,
  disabled,
  onDoubleClick,
  onChange,
  placeholder,
  type,
  name,
  helperText,
  size,
  error,
  onBlur,
  autoFocus,
  className = "",
}) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        className={className}
        type={type}
        id="standard-basic"
        label={label}
        variant={variant}
        size={size}
        value={value}
        disabled={disabled}
        onDoubleClick={onDoubleClick}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        helperText={helperText}
        error={error && error}
        onBlur={onBlur}
        autoFocus={autoFocus}
      />
    </Box>
  );
};

export default TextFields;
