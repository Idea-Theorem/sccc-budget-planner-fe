import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AdminDataCard from "../../../components/AdminDataCard";
import MainHeaderComponent from "../../../components/MainHeader";
import AdminDepartmentProgress from "../../../components/AdminDepartentProgress";
import CollapsibleTable from "../../../components/CollapseTable";
import React, { useEffect } from "react";
import { getDepartment, getPrograms, getTotalbudget } from "../../../services/adminServices";
import { useAuth } from "../../../contexts/AuthContext";
import moment from "moment";
import { formatNumber } from "../../../utils";
import BudgetModal from "../../../models/Budgetmodal";
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
  const [isOpen, setIsOpen] = React.useState<any>(false)
  const [totalBudget, setTotalBudget] = React.useState<any>("")
  const { user } = useAuth();

  useEffect(() => {
    fetchProgram();
    fetchDepartment();
    fetchTotalbudget()
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

  const fetchTotalbudget = async () => {
    try {
      const response = await getTotalbudget();
      setTotalBudget(response?.data)
    } catch (error) {}
  };
const handleModalClose = () => {
  setIsOpen(false)
}
  
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        array={array} 
        title="Dashboard"
        btnTitle="Actions"
        subTitle={"Welcome" + " " + user?.firstname + " " + user?.lastname}
        date={moment().format("dddd D, MMM ")}
        subHeader={true}
        action={true}
      />
      <Box className="dashboardCards">
        <AdminDataCard 
          detail="*The total is calculated based on approved programs"
          title="Budget-to-date"
          edit={true}
          total={formatNumber(totalBudget?.total_value ? totalBudget?.total_value : "")}
          done={formatNumber(programs?.totalApprovedProgrambudget)}
          showProgress={true}
          showDollarSign={true}
          color="info"
           handleAddclick={() => setIsOpen(true)}
        />
        <AdminDataCard
          title="Approved Prgs-to-date"
          total={programs.programsCount && programs.programsCount  + ' ' + "forecast"}
          done={programs.approvedCount}
          edit={false}
          showDollarSign={false}
        />
        <AdminDataCard
          title="Completed Dept."
          total={programs.departmentCount}
          done={programs.approvedDepartmentCount}
          showDollarSign={false}
        />
      </Box>
      <BudgetModal fetchTotalbudget={fetchTotalbudget} totalBudget={totalBudget} placeholder="$ Emter amount" open={isOpen} handleClose={handleModalClose} heading="Add Budget" subheading="budegt total"/>
      <AdminDepartmentProgress department={department} from="admin"/>
      <CollapsibleTable />
    </StyledBox>
  );
};

export default AdminScreen;
