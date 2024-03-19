import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableComponent from "../Table";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface TabTitle {
  title?: string;
}
interface BasicTabsProps {
  tabsTitleArray: TabTitle[];
}

const CustomTabPanel = (props: TabPanelProps) => {
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

const BasicTabs = (props: BasicTabsProps) => {
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
        >
          {props?.tabsTitleArray?.map((item, index) => (
            <Tab key={index} label={item?.title} {...a11yProps(index)} />
          ))}

          {/* <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Rejected" {...a11yProps(1)} />
          <Tab label="Approved" {...a11yProps(2)} />
          <Tab label="Drafts" {...a11yProps(3)} />
          <Tab label="History" {...a11yProps(4)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <TableComponent />
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

export default function TabsArea(props: BasicTabsProps) {
  return (
    <TabsAreas>
      <BasicTabs tabsTitleArray={props.tabsTitleArray} />
    </TabsAreas>
  );
}
