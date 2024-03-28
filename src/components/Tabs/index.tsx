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
  table: any;
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
        </Tabs>
      </Box>
      {props?.table?.map((item: any, index: any) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <TableComponent columns={item} />
        </CustomTabPanel>
      ))}

      {/* <CustomTabPanel value={value} index={1}>
        <TableComponent columns={props.tableColumnsTitleArray} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TableComponent columns={props.tableColumnsTitleArray} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TableComponent columns={props.tableColumnsTitleArray} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <TableComponent columns={props.tableColumnsTitleArray} />
      </CustomTabPanel> */}
    </Box>
  );
};

const TabsAreas = styled(Box)(({ theme }) => ({
  "& .MuiTabs-root": {
    margin: "0 0 15px",

    ".css-sub0s1-MuiButtonBase-root-MuiTab-root": {
      padding: "15px 23px 8px",
      minHeight: "inherit",
    },
  },
  ".MuiTabs-root": {
    margin: "0 0 7px",
  },

  ".MuiTabs-flexContainer": {
    borderBottom: "1px solid #BFBFBF",
    height: "100%",

    "& .MuiButtonBase-root": {
      textTransform: "capitalize;",
      color: theme.palette.action.selected,
      fontFamily: "Work Sans",
      fontWeight: "500",
      letterSpacing: "0.4px",

      "&:hover": {
        color: theme.palette.primary.main,
      },

      "&.Mui-selected": {
        color: theme.palette.primary.main,
        fontWeight: "600",
      },
    },
  },
  "&.MuiButtonBase-root": {
    color: theme.palette.error.main,
  },
}));

export default function TabsArea(props: BasicTabsProps) {
  return (
    <TabsAreas>
      <BasicTabs tabsTitleArray={props?.tabsTitleArray} table={props?.table} />
    </TabsAreas>
  );
}
