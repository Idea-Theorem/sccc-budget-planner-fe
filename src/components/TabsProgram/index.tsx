import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ProgramTable from "../ProgramTable";

interface TabsProgramPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabsProgramPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsProgram = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("event", event);
    setValue(newValue);
  };

  return (
    <Box width="100%">
      <Box borderBottom="1" borderColor="divider">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tabs-lists"
        >
          <Tab label="Income" {...a11yProps(0)} className="listitem"/>
          <Tab label="Expense (Supplies & Services)" {...a11yProps(1)} className="listitem"/>
          <Tab label="Expense (Salary & Benefits)" {...a11yProps(2)} className="listitem"/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProgramTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ProgramTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ProgramTable />
      </CustomTabPanel>
    </Box>
  );
};

const TabsAreas = styled(Box)(({ theme }) => ({
  ".MuiTabs-flexContainer": {
    borderBottom: "1px solid #BFBFBF",
    height: "100%",
  },
  "&.MuiButtonBase-root": {
    color: theme.palette.error.main, //Example used plz exact style according to figma
  },
  ".tabs-lists": {
    width: "100%",
    minHeight: "inherit",

    ".listitem": {
      width: "33.333%",
      margin: "-11px 0 0",
      padding: "9px 0 0",
    },
  },
  ".MuiTableCell-head": {
    padding: "0 15px !important",
  }
}));

export default function TabsProgramArea() {
  return (
    <TabsAreas>
      <TabsProgram />
    </TabsAreas>
  );
}
