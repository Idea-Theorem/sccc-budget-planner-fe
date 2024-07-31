import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../components/MainHeader";
import AdminDataCard from "../../components/AdminDataCard";
import AdminDepartmentProgress from "../../components/AdminDepartentProgress";
import { getAllCenters } from "../../services/centersServices";
import React, { useEffect, useState } from "react";
import { formatNumber } from "../../utils";
import moment from "moment";
import { useAuth } from "../../contexts/AuthContext";
import SuperAdminBudgetModal from "../../models/SuperAdminBudgetModal";
import { getPrograms, getTotalbudget } from "../../services/adminServices";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -6px 0 -12px",
  },
}));
const SuperAdminScreen = () => {
  const array = [{ text: "Export" }, { text: "Reset" }];
  const [center, setCenter] = useState([]);
  const [centerLoading, setCenterLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<any>(false);
  const [programs, setPrograms] = React.useState<any>({});

  const [totalBudget, setTotalBudget] = React.useState<any>("");

  const { user } = useAuth();

  useEffect(() => {
    fetchCenter();
    fetchTotalbudget();
    fetchProgram();
  }, []);

  const fetchProgram = async () => {
    try {
      const response = await getPrograms();
      setPrograms(response?.data);
    } catch (error) {}
  };

  const fetchCenter = async () => {
    try {
      setCenterLoading(true);
      const response = await getAllCenters("");
      setCenter(response?.data?.centers);
      setCenterLoading(false);
    } catch (error) {
      setCenterLoading(false);
    }
  };
  const fetchTotalbudget = async () => {
    try {
      // const response = await getSuperAdminTotalbudget();
      const response = await getTotalbudget();

      setTotalBudget(response?.data);
    } catch (error) {}
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        array={array}
        title="Dashboard"
        btnTitle="Actions"
        step={0}
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
          total={formatNumber(
            totalBudget?.total_value ? totalBudget?.total_value : ""
          )}
          done={formatNumber(programs?.totalApprovedProgrambudget)}
          showProgress={true}
          color="info"
          handleAddclick={() => setIsOpen(true)}
          showDollarSign={true}
        />
        <AdminDataCard
          title="Approved Prgs-to-date"
          total={
            programs.programsCount && programs.programsCount + " " + "forecast"
          }
          done={programs.approvedCount}
          edit={false}
          showDollarSign={false}
        />
        <AdminDataCard
          showDollarSign={false}
          total={programs.totalCenters}
          done={programs.approvedcenters}
          title="Completed Org."
        />
      </Box>
      <SuperAdminBudgetModal
        approvedBudget={programs?.totalApprovedProgrambudget}
        open={isOpen}
        handleClose={handleModalClose}
        heading="Add Budget"
        subheading="Budget Total"
        fetchTotalbudget={fetchTotalbudget}
        totalBudget={totalBudget}
        placeholder="$ Enter amount"
      />
      <AdminDepartmentProgress
        from="super-admin"
        center={center}
        loading={centerLoading}
      />
    </StyledBox>
  );
};

export default SuperAdminScreen;
