import Box from "@mui/material/Box";
import BasicPie from "../PieChart";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ProgramProgress from "./programProgress";
import DepartmentButton from "./departmentButton";
import { departments } from "../../utils/sampleData";

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
    },

    "& .dashboardGraphsList": {
      flexGrow: "1",
      minWidth: "0",
    },
  },
}));
const AdminDepartmentProgress = () => {

  return (
    <StyledBox className="dashboardStatsCard">
      <Typography variant="h3">Department %</Typography>
      <Box className="tagsList">
        {departments.map((e) => (
          <DepartmentButton text={e.title} color={e.color}/>
        ))} 
      </Box>
      <Box className="dashboardGraphsBlock">
        <Box className="dashboardGraphBox">
          <BasicPie />
        </Box>
        <Box className="dashboardGraphsList">
          <ProgramProgress title="Program 1" amount="$00.000" value={70}/> 
          <ProgramProgress title="Program 2" amount="$00.000" value={60}/>
          <ProgramProgress title="Program 3" amount="$00.000" value={40}/>
          <ProgramProgress title="Program 4" amount="$00.000" value={50}/>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default AdminDepartmentProgress;
