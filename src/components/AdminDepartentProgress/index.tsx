import Box from "@mui/material/Box";
import BasicPie from "../PieChart";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ProgramProgress from "./programProgress";
import DepartmentButton from "./departmentButton";

const StyledBox = styled(Box)(({ theme }) => ({
  Color: theme.palette.secondary.light,
  marginTop: "20px",
}));
const AdminDepartmentProgress = () => {
  return (
    <StyledBox>
      <Typography>Department %</Typography>
      {[1, 1, 1, 1].map(() => (
        <DepartmentButton />
      ))}
      <BasicPie />
      <ProgramProgress title="Program 1" amount="$00.000" />
    </StyledBox>
  );
};

export default AdminDepartmentProgress;
