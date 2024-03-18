import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AdminDataCard from "../../../components/AdminDataCard";
import MainHeaderComponent from "../../../components/MainHeader";
import AdminDepartmentProgress from "../../../components/AdminDepartentProgress";
import CollapsibleTable from "../../../components/CollapseTable";
const StyledBox = styled(Box)(({ theme }) => ({
  Color: theme.palette.secondary.light,
}));
const AdminScreen = () => {
  return (
    <StyledBox sx={{ paddingLeft: "250px" }}>
      <MainHeaderComponent
        title="Dashboard"
        btnTitle="Actions"
        subTitle="Welcome, Tomohiro!"
        date="Monday, 5-Mar"
        subHeader={true}
      />
      <AdminDataCard
        detail="*The total is calculated based on approved programs"
        title="Budget-to-date"
        edit={true}
        total="$1,000.000.00"
        done="$500,000.00"
        showProgress={true}
      />
      <AdminDataCard
        title="Approved Prgs-to-date"
        total="45 forecase"
        done="24"
      />
      <AdminDataCard title="Completed Dept." total="8" done="4" />
      <AdminDepartmentProgress />
      <CollapsibleTable />
    </StyledBox>
  );
};

export default AdminScreen;
