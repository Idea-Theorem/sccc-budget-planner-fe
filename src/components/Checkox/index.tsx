import Box  from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles"; 

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
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
