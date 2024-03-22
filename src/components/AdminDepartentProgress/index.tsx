import Box from "@mui/material/Box";
import BasicPie from "../PieChart";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ProgramProgress from "./programProgress";
import DepartmentButton from "./departmentButton";
import { departments } from "../../utils/sampleData";


const StyledBox = styled(Box)(() => ({
  "&.dashboardStatsCard": {
    width: "100%",
    padding: "23px 24px",
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
      margin: "0 -3px 20px -4px",
    },

    "& .dashboardGraphsBlock": {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "row",
    },

    "& .dashboardGraphBox": {
      width: "303px",
      flexShrink: "0",
      padding: "6px 15px", // Fixed typo in padding
    },

    "& .dashboardGraphsList": {
      flexGrow: "1",
      minWidth: "0",
    },
  },
}));

const AdminDepartmentProgress = () => { // Corrected props definition
  return (
    <StyledBox className="dashboardStatsCard">
      <Typography variant="h3">Department %</Typography>
      <Box className="tagsList">
        {departments.map((e, index) => (
          <DepartmentButton key={index} text={e.title} color={e.color} />
        ))}
      </Box>
      <Box className="dashboardGraphsBlock">
        <Box className="dashboardGraphBox">
          <BasicPie />
        </Box>
        <Box className="dashboardGraphsList">
          <ProgramProgress title="Program 1" amount="$00.000" value={20} color="info"/>
          <ProgramProgress title="Program 2" amount="$00.000" value={60} color="secondary" /> 
          <ProgramProgress title="Program 3" amount="$00.000" value={40} color="error"/>
          <ProgramProgress title="Program 4" amount="$00.000" value={50} color="warning" />
        </Box>
      </Box>
    </StyledBox>
  );
};

export default AdminDepartmentProgress;
