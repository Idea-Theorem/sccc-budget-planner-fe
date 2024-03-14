import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)({
  // Add your styling here
});
const StyledInputLabel = styled(InputLabel)({
  // Add your styling here
});

const StyledFormControl = styled(FormControl)({
  // Add your styling here
});

const StyledNativeSelect = styled(NativeSelect)({
  // Add your styling here
});

const SelectComponent = () => {
  return (
    <StyledBox>
      <StyledFormControl fullWidth>
        <StyledInputLabel variant="standard" htmlFor="uncontrolled-native">
          Role
        </StyledInputLabel>
        <StyledNativeSelect
          defaultValue={30}
          inputProps={{
            name: "value",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>Super admin</option>
          <option value={20}>Admin</option>
          <option value={30}>Department Head</option>
          <option value={30}>Program Head</option>
        </StyledNativeSelect>
      </StyledFormControl>
    </StyledBox>
  );
};
export default SelectComponent;
