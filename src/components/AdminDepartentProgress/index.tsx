import Box from "@mui/material/Box";
import BasicPie from "../PieChart";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ProgramProgress from "./programProgress";
import DepartmentButton from "./departmentButton";

const StyledBox = styled(Box)(({ theme }) => ({
  "&.dashboardStatsCard":{
    width: "100%",
    padding: "25px 30px",
    marginBottom: "24px",
    boxShadow: "0 1.85px 6.25px 0 rgba(0, 0, 0, 0.19), 0 0.5px 1.75px 0 rgba(0, 0, 0, 0.04)",

    "& .MuiTypography-h3": {
      color: "#303030",
      fontFamily: "Work Sans",
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "1.3",
      margin: "0 0 16px",
    },

    "& .tagsList": {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      overflow: "hidden",
      margin: "0 0 20px",
    },

    "& .dashboardGraphsBlock": {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },

    "& .dashboardGraphBox": {
      width: "320px",
      flexShrink: "0",
      paading: "15px",

      "& > div": {
        // width: "100%",
      },
    },

    "& .dashboardGraphsList": {
      flexGrow: "1",
      minWidth: "0",
    },
  },
  // Color: theme.palette.secondary.light,
  // marginTop: "20px",
}));
const AdminDepartmentProgress = () => {
  return (
    <StyledBox className="dashboardStatsCard">
      <Typography variant="h3">Department %</Typography>
      <Box className="tagsList">
        {[1, 1, 1, 1].map(() => (
          <DepartmentButton />
        ))}
      </Box>
      <Box className="dashboardGraphsBlock">
        <Box className="dashboardGraphBox">
          <BasicPie />
        </Box>
        <Box className="dashboardGraphsList">
          <ProgramProgress title="Program 1" amount="$00.000" />
        </Box>
      </Box>
    </StyledBox>
  );
};

export default AdminDepartmentProgress;
