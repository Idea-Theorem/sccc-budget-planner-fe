import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TabsComponent from "../../../Components/HRComponents/HRTabs";
import { Typography } from "@mui/material";
import { useAuth } from "../../../../contexts/AuthContext";

const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },

  "& .hrBlockTitle": {
    fontSize: "26px",
    lineHeight: "32.11px",
    fontweight: "600",
    fontFamily: "Work Sans,sans-serif",
    margin: "-4px 0 10px",
    letterSpacing: "0.25px",
  },

  "& .MuiTabs-flexContainer": {
    "& .MuiTab-root": {
      minWidth: "172px",
      textTransform: "capitalize",
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

const HREmployeees: React.FC<SuperAdminProps> = () => {
  // const tabNames = ["Employees", "Departments", "Community Centres"];

  const { currentRole } = useAuth();

  const handleTabsDynamically = () => {
    if (currentRole == "HR") {
      return ["Employees"];
    } else if (currentRole == "Admin") {
      return ["Employees", "Departments"];
    } else if (currentRole == "Super_Admin") {
      return ["Employees", "Departments", "Community Centres"];
    } else {
      [];
    }
  };
  return (
    <StyledBox className="appContainer">
      <Typography className="hrBlockTitle" variant="h3">
        HR (Human Resources)
      </Typography>

      <TabsComponent tabNames={handleTabsDynamically()} />
    </StyledBox>
  );
};

export default HREmployeees;
