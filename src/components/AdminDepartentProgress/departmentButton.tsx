import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
const StyledStack = styled(Stack)(({ theme }) => ({
  Color: theme.palette.secondary.light,
}));
const DepartmentButton = () => {
  return (
    <StyledStack>
      <Box />
      <Typography> Recreation & Culture</Typography>
    </StyledStack>
  );
};

export default DepartmentButton;
