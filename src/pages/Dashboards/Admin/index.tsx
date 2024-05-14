import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AdminDataCard from "../../../components/AdminDataCard";
import MainHeaderComponent from "../../../components/MainHeader";
import AdminDepartmentProgress from "../../../components/AdminDepartentProgress";
import CollapsibleTable from "../../../components/CollapseTable";
import React, { useEffect } from "react";
import { getDepartment, getPrograms } from "../../../services/adminServices";
import { useAuth } from "../../../contexts/AuthContext";
import moment from "moment";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -6px 0 -12px",
  },
}));
const AdminScreen = () => {
  const array = [{ text: "Export" }, { text: "Reset" }];
  const [programs, setPrograms] = React.useState<any>({});
  const [department, setDepartment] = React.useState<any>([]);
  console.log("department:::::::", department)
  const { user } = useAuth();

  useEffect(() => {
    fetchProgram();
    fetchDepartment();
  }, []);

  const fetchProgram = async () => {
    try {
      const response = await getPrograms();
      setPrograms(response?.data);
    } catch (error) {}
  };

  const fetchDepartment = async () => {
    try {
      const response = await getDepartment();
      setDepartment(response?.data?.departments);
    } catch (error) {}
  };
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        array={array} 
        title="Dashboard"
        btnTitle="Actions"
        subTitle={user?.firstname + " " + user?.lastname}
        date={moment().format("dddd D, MMM ")}
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
          total={programs.programsCount}
          done={programs.approvedCount}
          edit={true}
        />
        <AdminDataCard
          title="Completed Dept."
          total={department.departmentsCount}
          done={department.approvedCount}
        />
      </Box>
      <AdminDepartmentProgress department={department}/>
      <CollapsibleTable />
    </StyledBox>
  );
};

export default AdminScreen;
