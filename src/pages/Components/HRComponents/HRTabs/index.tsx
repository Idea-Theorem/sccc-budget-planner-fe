import React, { ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HRTableComponent from "../HRTable";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import HrCollapsibleTable from "../HrCollapseTable";

const AppHuman = styled(Box)(({ theme }) => ({
  ".css-heg063-MuiTabs-flexContainer": {
    borderBottom: "1px solid #BFBFBF",
  },
  ".css-1ula99k-MuiPaper-root-MuiAppBar-root": {
    background: "none",
    boxShadow: "none",
  },
  ".css-1nu5xgx-MuiTypography-root": {
    color: theme.palette.common.blackshades["4p"],
  },
  ".css-gqb8su-MuiButtonBase-root-MuiButton-root": {
    textTransform: "capitalize",
  },
}));

interface TabProps {
  tabNames: string[];
}

const TabsComponent: React.FC<TabProps> = ({ tabNames }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const routes = [
    { path: "/superAdmin/hr-addemployees" },
    { path: "/superAdmin/hr-adddepartment" },
    { path: "/superAdmin/hr-addcenter" },
  ];

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
              <Link
                to={routes[value].path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  startIcon={<AddIcon />}
                >
                  Add New {tabNames[value]}
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          {value === 0 && <HrCollapsibleTable />} 
          {value === 1 && <HRTableComponent />}
        </Grid>
      </Grid>
    </AppHuman>
  );
};

export default TabsComponent;
