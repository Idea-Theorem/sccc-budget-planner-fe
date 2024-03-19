import React from 'react';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TabsComponent from '../../../Components/HRComponents/HRTabs';


const StyledBox = styled(Box)(() => ({
  "&.appContainer": {
    padding: "40px",
    paddingLeft: "248px",
  },

  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,
}));
interface SuperAdminProps {
  name: string;
}
const tabNames = ['Employess', 'Departments', 'Community Centers'];
const HREmployeees: React.FC<SuperAdminProps> = () => {
  return (
    <StyledBox className="appContainer">
      <h1>HR (Human Resources) </h1>
      
      
      <TabsComponent tabNames={tabNames}/>

    </StyledBox>
  );
};

export default HREmployeees;
