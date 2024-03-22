import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AdminDataCard from "../../../components/AdminDataCard";
import MainHeaderComponent from "../../../components/MainHeader";
import AdminDepartmentProgress from "../../../components/AdminDepartentProgress";
import CollapsibleTable from "../../../components/CollapseTable";
const StyledBox = styled(Box)(() => ({

  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,
}));
const AdminScreen = () => {
  const array = [
    {text: "Export"},
    {text: "Reset"},
  ]
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent 
      array={array}
        title="Dashboard"
        btnTitle="Actions"
        subTitle="Welcome, Tomohiro!"
        date="Monday, 5-Mar"
        subHeader={true}
        action={true}
      />
      <Box className="dashboardCards">
        <AdminDataCard
          detail="*The total is calculated based on approved programs"
          title="Budget-to-date"
          edit={true}
          total="$1,000.000.00"
          done="$500,000.00"
          showProgress={true}
          color="info"
        />
        <AdminDataCard
          title="Approved Prgs-to-date"
          total="45 forecast"
          done="24"
          edit={true}
        />
        <AdminDataCard title="Completed Dept." total="8" done="4" />
      </Box>
      <AdminDepartmentProgress />
      <CollapsibleTable />
    </StyledBox>
  );
};

export default AdminScreen;
