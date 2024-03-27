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

  interface IProps {
   
    open?: boolean
    handleClose?: any
    heading?: string
    singleEmployeeData?: any
  }
const AddEmployee: React.FC<IProps> = ({open, handleClose, heading, singleEmployeeData}) => {
  return (
    <StyledBox className="appContainer">
     <HrAddEmployee heading={heading} open={open} handleClose={handleClose} singleEmployeeData={singleEmployeeData}/>
      </StyledBox>
  );
};

export default AddEmployee;
