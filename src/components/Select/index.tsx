import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)({
  width: "100%",
  margin: "0",
  padding: "0",
  borderBottom: "1px solid #0000006B",
});

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "1",
  fontWeight: "400",
  fontFamily: "Roboto, sans-serif",
  color: theme.palette.primary.main,
  position: "static",
  transform: "none",
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  fontFamily: "Roboto, sans-serif",
  fontSize: "16px",
  lineHeight: "1.5",
  fontWeight: "400",
  color: theme.palette.gfGrey.GF75,
}));

const ErrorMessage = styled("div")(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: "12px",
  marginTop: "8px",
}));

export default function SelectDemo({
  title,
  list,
  receiveValue,
  value,
  error,
  disabled,
  placeholder,
  errorMessage,
  className="",
  parentClass="",
}: any) {

  const handleChange = (event: any) => {
    receiveValue(event.target.value);
  };
  function convertToLowerAndRemoveUnderscore(inputString: string | number) {
    if (typeof inputString === "number") {
      return inputString;
    }
    // Check if inputString exists
    if (inputString) {
      // Convert the input string to lowercase and remove underscores
      return inputString.toLowerCase().replace(/_/g, " ");
    } else {
      // If inputString is undefined or null, return an empty string
      return "";
    }
  }

  return (
    <StyledFormControl size="medium" variant="standard" error={error} className={`full-width ${parentClass}`}>
        <StyledInputLabel>{title}</StyledInputLabel>
        <Box className={`input-wrap ${className}`}>
          <StyledSelect
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            labelId="select-label"
            id="select-demo"
            label="Label"
            onChange={handleChange}
            className="select-list"
          >
            {list?.map((item: any) => (
              <MenuItem
                value={item.name}
                className="list"
                style={{ textTransform: "capitalize" }}
              >
                {convertToLowerAndRemoveUnderscore(item.name)}
              </MenuItem>
            ))}
          </StyledSelect>
          {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Box>
    </StyledFormControl>
  );
}
