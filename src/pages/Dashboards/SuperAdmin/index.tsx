import React from 'react'; 
import Box from "@mui/material/Box"; 
import { styled } from "@mui/material/styles"; 
 

const StyledBox = styled(Box)(() => ({
    "&.appContainer": {
      padding: " 37px",
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

const SuperAdminGreeting: React.FC<SuperAdminProps> = ({ name }) => {
  return (
    <StyledBox className="appContainer">
      <h1>Hello from Super Admin</h1>
      <p>Greetings, {name}!</p>
      </StyledBox>
  );
};

export default SuperAdminGreeting;
