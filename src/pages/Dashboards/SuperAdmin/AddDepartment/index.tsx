import React from 'react'; 
import Box from "@mui/material/Box"; 
import { styled } from "@mui/material/styles"; 
 

const StyledBox = styled(Box)(({ theme }) => ({
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


const AddDepartment: React.FC = () => {
  return (
    <StyledBox className="appContainer">
      <h1>Hello from add Department</h1>
      </StyledBox>
  );
};

export default AddDepartment;
