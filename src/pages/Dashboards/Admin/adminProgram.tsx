import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
const StyledBox = styled(Box)(() => ({
  "&.appContainer": {
    padding: "40px",
    paddingLeft: "248px",
  },

  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,
}));
const AdminProgramScreen = () => {
  return (
    <StyledBox className="appContainer">
      <Typography>programs here waiting fromm client</Typography>
    </StyledBox>
  );
};

export default AdminProgramScreen;
