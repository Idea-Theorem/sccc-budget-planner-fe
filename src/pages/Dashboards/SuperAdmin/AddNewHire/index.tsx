import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import HrAddNewHire from "../../../../models/HrAddNewhire";

const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,
}));

interface IProps {
  open?: boolean;
  handleClose?: any;
  heading?: string;
  singleEmployeeData?: any;
  setSingleEmployeeData?: any;
}
const AddNewHire: React.FC<IProps> = ({
  open,
  handleClose,
  heading,
  singleEmployeeData,
  setSingleEmployeeData,
}) => {
  return (
    <StyledBox className="appContainer">
      <HrAddNewHire
        heading={heading}
        open={open}
        handleClose={handleClose}
        singleEmployeeData={singleEmployeeData}
        setSingleEmployeeData={setSingleEmployeeData}
      />
    </StyledBox>
  );
};

export default AddNewHire;
