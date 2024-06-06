import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../components/MainHeader";
import AdminDataCard from "../../components/AdminDataCard";
import AdminDepartmentProgress from "../../components/AdminDepartentProgress";
import { getAllCenters } from "../../services/centersServices";
import React, { useEffect, useState } from "react";
import { addRandomColor, formatNumber } from "../../utils";
import moment from "moment";
import { useAuth } from "../../contexts/AuthContext";
import SuperAdminBudgetModal from "../../models/SuperAdminBudgetModal";
import { getSuperAdminTotalbudget } from "../../services/adminServices";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -6px 0 -12px",
  },
}));
const SuperAdminScreen = () => {
  const array = [{ text: "Export" }, { text: "Reset" }];
  const [center, setCenter] = useState([])
  const [isOpen, setIsOpen] = React.useState<any>(false)
  const [totalBudget, setTotalBudget] = React.useState<any>("")


  const { user } = useAuth();


  useEffect(() => {
    fetchCenter();
    fetchTotalbudget()
  }, []);

  const fetchCenter = async () => {
    try {
      const response = await getAllCenters("");
      const coloredArray = addRandomColor(response?.data?.centers)
      setCenter(coloredArray)
    } catch (error) {}
  };
  const fetchTotalbudget = async () => {
    try {
      const response = await getSuperAdminTotalbudget();
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
          total={formatNumber(totalBudget?.total_value ? totalBudget?.total_value :"")}
          done="$500,000.00"
          showProgress={true}
          color="info"
          handleAddclick={() => setIsOpen(true)}
          showDollarSign={true}
        />
        <AdminDataCard
          title="Approved Prgs-to-date"
          total="45 forecast"
          done="24"
          edit={true}
          showDollarSign={false}
        />
        <AdminDataCard showDollarSign={false} title="Completed Dept." total="8" done="4" />
      </Box>
      <SuperAdminBudgetModal open={isOpen} handleClose={handleModalClose} heading="Add Budget" subheading="budegt total" fetchTotalbudget={fetchTotalbudget} totalBudget={totalBudget} placeholder="$ Emter amount"/>
      <AdminDepartmentProgress from="super-admin" center={center}/>
    </StyledBox>
  );
};

export default SuperAdminScreen;
