import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableComponent from "../Table";
import { getAllProgramsViaStatus } from "../../services/programServices";
import Status from "../../utils/dumpData";
import { useDispatch, useSelector } from "react-redux";
import { storeProgramList } from "../../store/reducers/programSlice";
import { RootState } from "../../store";
import { storeSingleProgram } from "../../store/reducers/programSlice";
import { useNavigate } from "react-router";

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
  row?: any;
  currentStatus?: any;
  handleActionReieve?:any
  setTabstatus?:any
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
  const [status, setStatus] = React.useState(Status.PENDING);
  const dispatch = useDispatch();
  const { programList } = useSelector((state: RootState) => state.program);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
    if (newValue === 0) {
      setStatus(Status.PENDING);
      props?.setTabstatus(Status.PENDING)
    } else if (newValue == 1) {
      setStatus(Status.APPROVED);
      props?.setTabstatus(Status.APPROVED)
    } else if (newValue == 2) {
      setStatus(Status.REJECTED);
      props?.setTabstatus(Status.REJECTED)
    } else if (newValue == 3) {
      setStatus(Status.DRAFTED);
      props?.setTabstatus(Status.DRAFTED)
    }
  };

  React.useEffect(() => {
    if (props?.tabsTitleArray.length > 0) {
      if (props?.tabsTitleArray[0].title == "Drafts") {
        setStatus(Status.DRAFTED);
      }
    }
  }, [props?.tabsTitleArray]);

  React.useEffect(() => {
    fetchProgramList(status);
  }, [status]);

  const fetchProgramList = async (status: string) => {
    try {
      const response = await getAllProgramsViaStatus(status);
      // const modifyArray = modifyCreatedAt(response?.data?.programs);
      dispatch(storeProgramList(response?.data?.programs));
    } catch (error) {}
  };
  const handleClick = (rowData: any) => {
    dispatch(storeSingleProgram(rowData));
    navigate("/department-head/program-review");
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
          <TableComponent
            onRowClick={(rowData) => handleClick(rowData)}
            columns={item}
            row={typeof programList == "undefined" ? [] : programList}
            status={props?.currentStatus}
            handleActionReieve={props?.handleActionReieve}
          />
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
      <BasicTabs
       setTabstatus={props?.setTabstatus}
        tabsTitleArray={props?.tabsTitleArray}
        table={props?.table}
        row={props?.row}
        currentStatus={props?.currentStatus}
        handleActionReieve={props?.handleActionReieve}
      />
    </TabsAreas>
  );
}
