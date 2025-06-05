import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import DepartmentInfo from "../../../../models/HrDepartment";

const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
}));

const AddCenter: React.FC = () => {
  return (
    <StyledBox className="appContainer">
      <DepartmentInfo heading={"add new Center"} />
    </StyledBox>
  );
};

export default AddCenter;
