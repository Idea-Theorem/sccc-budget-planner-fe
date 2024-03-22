import React, { ChangeEvent, useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HRTableComponent from "../HRTable";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import HrCollapsibleTable from "../HrCollapseTable";
import AddEmployee from "../../../Dashboards/SuperAdmin/AddEmployee";
import DepartmentInfo from "../../../../models/HrDepartment";
import CommunityTableComponent from "../CommunityCenterTable";
import CommunityModal from "../../../../models/CommunityModal";

const AppHuman = styled(Box)(({ theme }) => ({
  ".css-heg063-MuiTabs-flexContainer": {
    borderBottom: "1px solid #BFBFBF",
  },
  ".MuiPaper-root": {
    background: "none",
    boxShadow: "none",
  },
  ".MuiTypography-h6": {
    color: theme.palette.common.blackshades["4p"],
  },
  ".MuiButton-root": {
    textTransform: "capitalize",
  },
}));

interface TabProps {
  tabNames: string[];
}

const TabsComponent: React.FC<TabProps> = ({ tabNames }) => {
  const [value, setValue] = React.useState(0);
  const [isOpen, setIsopen] = useState(false);
  const [isDepartOpen, setIsDepartopen] = useState(false);
  const [isCommunityOpen, setCommunityModal] = useState(false);
  const [heading, setHeading] = useState<string>("");
  const [departHeading, setDepartHeading] = useState<string>("");
  const [centerHeading, setCenterHeading] = useState<string>("");
  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const routes = [
    { path: "/hr/addemployees" },
    { path: "/hr/adddepartment" },
    { path: "/hr/addcenter" },
  ];
  console.log(routes);

  const handleCloseModal = () => {
    setIsopen(false);
  };
  const handleCloseDepartmentModal = () => {
    setIsDepartopen(false);
  };
  const handleCloseCommunityModal = () => {
    setCommunityModal(false);
  };
  const handleClick = (e: any) => {
    if (e === "Employees") {
      setIsopen(true);
      setHeading("Add New Employee");
    } else if (e === "Departments") {
      setIsDepartopen(true);
      setDepartHeading("Add New Department");
    } else {
      setCommunityModal(true);
      setCenterHeading("Add New Center");
    }
  };
  const handleEditClick = () => {
    setIsopen(true);
    setHeading("Edit Employee");
  };
  const onEdit = () => {
    setIsDepartopen(true);
    setDepartHeading("Edit Department");
  };
  const onCommunityEdit = () => {
    setCommunityModal(true);
    setCenterHeading("Edit center");
  };
  return (
    <AppHuman>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            {tabNames.map((name, index) => (
              <Tab key={index} label={name} />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {tabNames[value]}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<AddIcon />}
                onClick={() => handleClick(tabNames[value])}
              >
                Add New {tabNames[value]}
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          {value === 0 && <HrCollapsibleTable handleClick={handleEditClick} />}
          {value === 1 && <HRTableComponent onEdit={onEdit} />}
          {value === 2 && (
            <CommunityTableComponent onCommunityEdit={onCommunityEdit} />
          )}
        </Grid>
      </Grid>
      <AddEmployee
        open={isOpen}
        handleClose={handleCloseModal}
        heading={heading}
      />
      <DepartmentInfo
        open={isDepartOpen}
        handleClose={handleCloseDepartmentModal}
        heading={departHeading}
        subheading="Department Information"
      />
      <CommunityModal
        open={isCommunityOpen}
        handleClose={handleCloseCommunityModal}
        heading={centerHeading}
        subheading="Center Information"
      />
    </AppHuman>
  );
};

export default TabsComponent;
