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
        <Box sx={{ p: 3 }}>
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
    setValue(newValue);
  };

  return (
    <Box width="100%">
      <Box borderBottom="1" borderColor="divider">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Income" {...a11yProps(0)} />
          <Tab label="Expense (Supplies & Services)" {...a11yProps(1)} />
          <Tab label="Expense (Salary & Benefits)" {...a11yProps(2)} />
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
  },
  "&.MuiButtonBase-root": {
    color: theme.palette.error.main, //Example used plz exact style according to figma
  },
}));

export default function TabsProgramArea() {
  return (
    <TabsAreas>
      <TabsProgram />
    </TabsAreas>
  );
}
