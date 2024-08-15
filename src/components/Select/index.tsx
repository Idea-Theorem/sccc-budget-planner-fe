import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)({
  width: "100%",
  margin: "0",
  padding: "8px 19px",
  borderBottom: "1px solid #fff",

  ".input-wrap": {
    position: "relative",

    ".MuiInputBase-root": {
      textTransform: "capitalize",
    },

    '.MuiSelect-select': {
      color: "rgba(0,0,0,0.87)",
      fontFamily: "Work Sans",
      fontWeight: "500",
    },
  },

  // ".MuiSelect-select": {
  //   color: "#fff",
  //   fontWeight: 600,
  //   textTransform: "capitalize",
  // },

  // ".MuiSvgIcon-root": {
  //   color: "#fff",
  //   top: "calc(50% - 14px)",
  // },
});

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "1",
  fontWeight: "400",
  fontFamily: "Work Sans",
  color: theme.palette.primary.main,
  position: "static",
  transform: "none",
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  fontFamily: "Work Sans",
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
  className = "",
  parentClass = "",
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
    <StyledFormControl
      size="medium"
      variant="standard"
      error={error}
      className={`full-width ${parentClass}`}
    >
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
