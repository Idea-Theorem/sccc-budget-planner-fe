import React from 'react'; 
import Box from "@mui/material/Box"; 
import { styled } from "@mui/material/styles"; 
import DepartmentInfo from '../../../../models/HrDepartment';
 

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


const AddDepartment: React.FC = () => {
  return (
    <StyledBox className="appContainer">
     <DepartmentInfo heading={"add new Department"}/>
      </StyledBox>
  );
};

export default AddDepartment;
