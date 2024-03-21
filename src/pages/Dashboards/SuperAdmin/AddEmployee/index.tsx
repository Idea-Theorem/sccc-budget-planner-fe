import React from 'react'; 
import Box from "@mui/material/Box"; 
import { styled } from "@mui/material/styles"; 
import HrAddEmployee from '../../../../models/HrAddEmployee';
 

const StyledBox = styled(Box)(() => ({
  
    "& .dashboardCards": {
      display: "flex",
      justifyContent: "space-between",
      margin: "0 -12px",
    },
    // Color: theme.palette.secondary.light,
  }));


const AddEmployee: React.FC = () => {
  return (
    <StyledBox className="appContainer">
     <HrAddEmployee heading={"add new Employee"}/>
      </StyledBox>
  );
};

export default AddEmployee;
