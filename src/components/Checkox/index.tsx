import Checkbox from "@mui/material/Checkbox";
import { Box, styled } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.success.main,
}));

const Checkboxes = () => {
  return (
    <Box>
      <StyledCheckbox {...label} defaultChecked />
      <StyledCheckbox {...label} />
      <StyledCheckbox {...label} disabled />
      <StyledCheckbox {...label} disabled checked />
    </Box>
  );
};

export default Checkboxes;
