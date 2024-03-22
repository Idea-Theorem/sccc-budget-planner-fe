import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TabsComponent from "../../../Components/HRComponents/HRTabs";

const StyledBox = styled(Box)(({ theme }) => ({

  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,

  "& .hrBlockTitle": {
    fontSize: "26px",
    fontweight: "600",
    fontFamily: "Work Sans,sans-serif",
    margin: "-4px 0 10px",
  },

  "& .MuiTabs-flexContainer": {
    "& .MuiTab-root": {
      minWidth: "172px",
      textCransform: "capitalize",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "Work Sans,sans-serif",
      padding: "12px 16px 6px",

      "&.Mui-selected": {
        fontWeight: "600",
      },
    },
  },

  "& .MuiPaper-root": {
    marginBottom: "-7px",
  },

  "& .MuiToolbar-gutters": {
    padding: "0",
    marginTop: "-6px",

    "& .MuiTypography-h6": {
      fontSize: "20px",
      fontWeight: "600",
      fontFamily: "Work Sans,sans-serif",
      marginTop: "-12px",
    },

    "& .MuiButton-root": {
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "Work Sans,sans-serif",
    },
  },
}));
interface SuperAdminProps {
  name: string;
}
const tabNames = ["Employees", "Departments", "Community Centres"];
const HREmployeees: React.FC<SuperAdminProps> = () => {
  return (
    <StyledBox className="appContainer">
      <h1 className="hrBlockTitle">HR (Human Resources) </h1>

      <TabsComponent tabNames={tabNames} />
    </StyledBox> 
  );
};

export default HREmployeees;
