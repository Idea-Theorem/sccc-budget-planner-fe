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
}) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        type={type}
        id="standard-basic"
        label={label}
        variant={variant}
        value={value}
        disabled={disabled}
        onDoubleClick={onDoubleClick}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        helperText={helperText}
      />
    </Box>
  );
};

export default TextFields;
