import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type TextFieldVariants = "standard" | "filled" | "outlined";

interface ITextFields {
  label?: string;
  variant?: TextFieldVariants;
  value?: string
}

const TextFields: React.FC<ITextFields> = ({ label, variant, value }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label={label}
        variant={variant}
        defaultValue="value"
        value={value}
      />
    </Box>
  );
};

export default TextFields;
