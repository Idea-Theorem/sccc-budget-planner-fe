import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../../components/Tabs";
import Status from "../../../utils/dumpData";
import {  Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter, formatNumber } from "../../../utils";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import moment from "moment";
import {
  storeProgramFromStatus,
  storeSingleProgram,
} from "../../../store/reducers/programSlice";
import SelectDemo from "../../../components/Select";
import { getAllDepartments } from "../../../services/departmentServices";
import { getProgramInDepartment } from "../../../services/centersServices";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,
  "& .back": {
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    lineHeight: "26px",
    color: "#303030",
    fontWeight: "500",
    gap: "10px",
  },

  ".breadcrumbs": {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",

    ".breadcrumbs-item": {
      fontSize: "14px",
      lineHeight: "21px",

      "&.previous-item": {
        cursor: "pointer",
        color: "#1E88E5",
      },
    },

    ".right-arrow": {
      width: "9px",
      height: "auto",
    },
  },

  ".departmentSelect ": {
    padding: "20px 0 8px",

    ".input-wrap": {
      ".MuiInputBase-root": {
        minWidth: "300px",
      },

      ".MuiSelect-select": {
        fontWeight: "500",
      },
    },
  },

  "& .right-arrow": {
    width: "15px",
    height: "15px",
  },

  "& .name": {
    fontSize: "20px",
    lineHeight: "24.7px",
    color: "#000000DE",
    margin: "0 0 10px",
    fontWeight: "600",
    padding: "20px 0 0",
  },

  "& .amount-text": {
    fontSize: "16px",
    lineHeight: "20px",
    color: "#000000DE",
    margin: "0 0 10px",
    fontWeight: "400",
  },
}));
const RecreationAndCultureScreen = ({}: any) => {
  const tableColumnsTitleArray = [
    [
      {
        field: "name",
        headerName: "Program Name",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{params?.row?.code + "-" + params?.row?.name}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          params?.row?.code + "-" + params?.row?.name,
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{capitalizeFirstLetter(params?.row?.status)}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          capitalizeFirstLetter(params?.row?.status),
      },

      {
        field: "programBudget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{formatNumber(params?.row?.programBudget)}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) => formatNumber(params?.row?.programBudget),
      },

      {
        field: "created_at",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{moment(params?.row?.created_at).format("D-MMM YYYY")}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          moment(params?.row?.created_at).format("D-MMM YYYY"),
      },
      {
        field: "comments",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{params?.row?._count?.Comment}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) => params?.row?._count?.Comment,
      },
    ],
    [
      {
        field: "name",
        headerName: "Program Name",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{params?.row?.code + "-" + params?.row?.name}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          params?.row?.code + "-" + params?.row?.name,
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{capitalizeFirstLetter(params?.row?.status)}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          capitalizeFirstLetter(params?.row?.status),
      },

      {
        field: "programBudget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{formatNumber(params?.row?.programBudget)}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) => formatNumber(params?.row?.programBudget),
      },

      {
        field: "created_at",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{moment(params?.row?.created_at).format("D-MMM YYYY")}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          moment(params?.row?.created_at).format("D-MMM YYYY"),
      },
      {
        field: "comments",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{params?.row?._count?.Comment}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) => params?.row?._count?.Comment,
      },
    ],
    [
      {
        field: "name",
        headerName: "Program Name",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{params?.row?.code + "-" + params?.row?.name}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          params?.row?.code + "-" + params?.row?.name,
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{capitalizeFirstLetter(params?.row?.status)}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          capitalizeFirstLetter(params?.row?.status),
      },

      {
        field: "programBudget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{formatNumber(params?.row?.programBudget)}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) => formatNumber(params?.row?.programBudget),
      },

      {
        field: "created_at",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{moment(params?.row?.created_at).format("D-MMM YYYY")}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          moment(params?.row?.created_at).format("D-MMM YYYY"),
      },
      {
        field: "comments",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{params?.row?._count?.Comment}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) => params?.row?._count?.Comment,
      },
    ],
  ];
  const { singleDepartName } = useSelector(
    (state: RootState) => state.program
  );
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const [clonedProgram, setClonedProgram] = React.useState<any>([]);
  const [programInDepartment, setProgramInDepartment] = React.useState<any>([]);
  const [departments, setDepartments] = useState<any>([]);
  const [activeDepartment, setActiveDepartment] = useState<any>("");
  const [totalBudget, settotalBudget] = useState("");




  
  const dispatch = useDispatch();
  console.log(tabstatus);
  const [status, setStatus] = React.useState<string>("");
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/admin/review-budget");
  };

  useEffect(() => {
    fetchDepartments();
  }, []);
  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments("");
     const matchDepartment =  response?.data?.departments.find(
        (item: any) => item?.name === singleDepartName?.name
      );
      setActiveDepartment(matchDepartment?.name);
      settotalBudget(matchDepartment?.value);
      setDepartments(response?.data?.departments);
    } catch (error) {}
  };

  const receiveDepartment = async (value: any) => {
    try {
      const filteredID = departments.find((item: any) => item?.name === value);
      setActiveDepartment(filteredID?.name);
      const res = await getProgramInDepartment(filteredID?.id);
      settotalBudget(res?.data?.totalBudget);
      setClonedProgram(res?.data?.programs)
      const filteredArray = res?.data?.programs?.filter(
        (item: any) => item?.status?.toLowerCase() == tabstatus?.toLowerCase()
      );
    setProgramInDepartment(filteredArray);
    } catch (error) {
    }
  };

  useEffect(() => {
    if(departments?.length > 0){
      receiveDepartment(activeDepartment)
    }
  },[departments])

  useEffect(() => {
    const filteredArray = clonedProgram.filter(
      (item: any) => item?.status?.toLowerCase() == tabstatus?.toLowerCase()
    );
    setProgramInDepartment(filteredArray);
    if (false) {
      setStatus("");
    }
  }, [tabstatus, departments]);

  const onRowClick = (data: any) => {
    dispatch(storeSingleProgram(data));
    dispatch(storeProgramFromStatus(Status.DEFAULT));
    navigate("/program-head/create");
  };

  const receiveProgramSearch = (value: string) => {
    const filteredArray = clonedProgram.filter((item: any) =>
      item?.name?.toLowerCase().includes(value.toLowerCase())
    );
    setProgramInDepartment(filteredArray);
  };

  return (
    <StyledBox className="appContainer">
      <Box className="breadcrumbs">
        <Typography onClick={() => goBack()} className="breadcrumbs-item previous-item">Review Budgets</Typography>
        <ArrowForwardIosIcon className="right-arrow" />
        <Typography onClick={() => goBack()} className="breadcrumbs-item">Departments</Typography>
      </Box>
      <Typography variant="h3">
        Review Budget
      </Typography>
      <SelectDemo
          parentClass="departmentSelect"
          title=""
          receiveValue={receiveDepartment}
          list={departments}
          value={activeDepartment}
          placeholder="Please Select"
        />
      <Typography className="amount-text">
        Total Budget: ${formatNumber(totalBudget)}
      </Typography>
      <TabsArea
        setTabstatus={setTabstatus}
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Approved" },
          { title: "Rejected" },
        ]}
        table={tableColumnsTitleArray}
        row={programInDepartment}
        currentStatus={status}
        onRowClick={onRowClick}
        receiveProgramSearch={receiveProgramSearch}
      />
    </StyledBox>
  );
};

export default RecreationAndCultureScreen;
