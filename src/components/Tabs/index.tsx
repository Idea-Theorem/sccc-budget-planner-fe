import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableComponent from "../Table";
import { getAllProgramsViaStatus } from "../../services/programServices";
import Status from "../../utils/dumpData";
import { useDispatch } from "react-redux";
import {
  storeProgramFromStatus,
  storeProgramList,
} from "../../store/reducers/programSlice";
import { storeSingleProgram } from "../../store/reducers/programSlice";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

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
  onRowClick?: any;
  row?: any;
  currentStatus?: any;
  handleActionReieve?: any;
  setTabstatus?: any;
  checkout?: boolean;
  receiveProgramSearch?: any;
  approveTabAcriveClass?: boolean;
  fetchProgramList?: any;
  showCursor?: boolean;
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
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(Status.PENDING);
  const dispatch = useDispatch();
  const navigate: any = useNavigate();
  const location = useLocation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
    if (newValue === 0) {
      setStatus(Status.PENDING);
      props?.setTabstatus(Status.PENDING);
    } else if (newValue == 1) {
      setStatus(Status.APPROVED);
      props?.setTabstatus(Status.APPROVED);
    } else if (newValue == 2) {
      setStatus(Status.REJECTED);
      props?.setTabstatus(Status.REJECTED);
    } else if (newValue == 3) {
      setStatus(Status.DRAFTED);
      props?.setTabstatus(Status.DRAFTED);
    } else if (newValue == 4) {
      setStatus(Status.EXPIRED);
      props?.setTabstatus(Status.EXPIRED);
    }
  };
  React.useEffect(() => {
    if (location?.pathname == "/program-head/draft") {
      fetchProgramList(Status.DRAFTED, "");
    }
  }, [location?.pathname]);

  React.useEffect(() => {
    fetchProgramList(status, "");
  }, [status]);

  const fetchProgramList = async (status: string, Searchvalue: string) => {
    try {
      setLoading(true);
      const response = await getAllProgramsViaStatus(status, Searchvalue);
      dispatch(storeProgramList(response?.data?.programs));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleClick = (rowData: any) => {
    if (props && props.onRowClick && typeof props.onRowClick === "function") {
      props.onRowClick(rowData);
    }
    if (
      location?.pathname == "/program-head/program" &&
      status == Status.REJECTED
    ) {
      dispatch(storeProgramFromStatus(Status.REJECTED));
      dispatch(storeSingleProgram(rowData));
      navigate("/program-head/create");
    } else if (location?.pathname == "/program-head/draft") {
      dispatch(storeSingleProgram(rowData));
      dispatch(storeProgramFromStatus(Status.DRAFTED));
      navigate("/program-head/create");
    } else if (
      location?.pathname == "/program-head/program" &&
      status == Status.DRAFTED
    ) {
      dispatch(storeSingleProgram(rowData));
      dispatch(storeProgramFromStatus(Status.DRAFTED));
      navigate("/program-head/create");
    } else if (
      location?.pathname == "/department-head/review-budgets" &&
      status == Status.PENDING
    ) {
      dispatch(storeProgramFromStatus(Status.PENDING));
      dispatch(storeSingleProgram(rowData));
      navigate("/department-head/program-review");
    }
  };

  const handleProgramSearch = (value: string) => {
    if (
      location.pathname == "/admin/review-budget" ||
      location.pathname == "/admin/recreation" ||
      location.pathname == "/super-admin/review-budgets"
    ) {
      props?.receiveProgramSearch(value);
    } else {
      fetchProgramList(status, value);
      props?.fetchProgramList(status, value);
    }
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
            row={typeof props?.row == "undefined" ? [] : props?.row}
            status={props?.currentStatus}
            handleActionReieve={props?.handleActionReieve}
            loading={loading}
            currentTab={status}
            checkout={props?.checkout}
            handleProgramSearch={handleProgramSearch}
            approveTabAcriveClass={props?.approveTabAcriveClass}
            showCursor={props?.showCursor}
          />
        </CustomTabPanel>
      ))}
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
        onRowClick={props?.onRowClick}
        checkout={props?.checkout}
        receiveProgramSearch={props?.receiveProgramSearch}
        approveTabAcriveClass={props?.approveTabAcriveClass}
        fetchProgramList={props?.fetchProgramList}
        showCursor={props?.showCursor}
      />
    </TabsAreas>
  );
}
