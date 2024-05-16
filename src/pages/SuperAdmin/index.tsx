import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../components/MainHeader";
import AdminDataCard from "../../components/AdminDataCard";
import AdminDepartmentProgress from "../../components/AdminDepartentProgress";
import { getAllCenters } from "../../services/centersServices";
import { useEffect, useState } from "react";
import { addRandomColor } from "../../utils";
import moment from "moment";
import { useAuth } from "../../contexts/AuthContext";
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
  const { user } = useAuth();


  useEffect(() => {
    fetchCenter();
  }, []);

  const fetchCenter = async () => {
    try {
      const response = await getAllCenters();
      const coloredArray = addRandomColor(response?.data?.centers)
      setCenter(coloredArray)
    } catch (error) {}
  };

  

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
      <AdminDepartmentProgress from="super-admin" center={center}/>
    </StyledBox>
  );
};

export default SuperAdminScreen;
