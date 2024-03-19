import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type TextFieldVariants = "standard" | "filled" | "outlined";

interface ITextFields {
  label?: string;
  variant?: TextFieldVariants;
}

const TextFields: React.FC<ITextFields> = ({ label, variant }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label={label}
        variant={variant}
        defaultValue="value"
      />
    </Box>
  );
};

export default TextFields;
