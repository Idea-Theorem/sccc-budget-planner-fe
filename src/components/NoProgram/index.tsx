import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const StyledBox = styled(Box)(({ theme }) => ({
  Color: theme.palette.secondary.light,
}));

const NoProgramExistComponent = () => {
  return (
    <StyledBox>
      <Typography variant="h6">No existing programs</Typography>
      <Box>
        <Link color="primary" href="#" underline="always" variant="subtitle2">
          Create new program
        </Link>
      </Box>
    </StyledBox>
  );
};

export default NoProgramExistComponent;
