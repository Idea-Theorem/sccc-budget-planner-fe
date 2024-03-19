import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
const StyledStack = styled(Stack)(({ theme }) => ({
  "&.statsTag": {
    background: "#e7eaee",
    borderRadius: "4px",
    margin: "0 4px 8px",
    padding: "4px 10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",

    "& .MuiBox-root": {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      margin: "0 5px 0 0",
      background: theme.palette.secondary.main,
    },

    "& .MuiTypography-root": {
      fontSize: "12px",
      lineHeight: "1.5",
      color: "#2d2d2d",
      fontWeight: "500",
      letterSpacing: "0.5px",
    },
  },
  // Color: theme.palette.secondary.light,
}));
const DepartmentButton = () => {
  return (
    <StyledStack className="statsTag">
      <Box />
      <Typography> Recreation & Culture</Typography>
    </StyledStack>
  );
};

export default DepartmentButton;