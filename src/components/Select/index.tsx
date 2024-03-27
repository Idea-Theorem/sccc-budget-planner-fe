import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)({
  width: "100%",
  margin: "50px 0",
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

export default function SelectDemo({title, list,receiveValue, value}: any) {
  const handleChange = (event: any) => {
  
    receiveValue(event.target.value)
  };

  return (
    <StyledFormControl size="medium" variant="standard">
      <StyledInputLabel>{title}</StyledInputLabel>
      <StyledSelect
       value={value}
        labelId="select-label"
        id="select-demo"
        label="Label"
        onChange={handleChange}
        className="select-list"
      >
        {list?.map((item: any) => (

        <MenuItem value={item.name}>{item.name}</MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
}
