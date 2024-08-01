import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../components/MainHeader";
import TabsArea from "../../components/Tabs";
import {

  getProgramInDepartment,
} from "../../services/centersServices";
import React, { useEffect, useState } from "react";
import Status from "../../utils/dumpData";
import { capitalizeFirstLetter, formatNumber } from "../../utils";
import { Stack, Typography } from "@mui/material";
import moment from "moment";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
  storeProgramFromStatus,
  storeSingleProgram,
} from "../../store/reducers/programSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  ".appHeader": {
    paddingBottom: "5px",

    "& .title": {
      fontWeight: "500",
      fontSize: "14px",
    },
  },

  ".breadcrumbs": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
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
      width: "7px",
      height: "auto",
    },
  },
}));

const SuperReviewBudgetPrograms = () => {
  const [center, setCenters] = useState([]);
  const [totalBudget, settotalBudget] = useState("");
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(tabstatus);
  const { currentDepartment } = useSelector(
    (state: RootState) => state.program
  );

  const tableColumnsProgram = [
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
        headerName: "Center Name",
        sortable: false,
        editable: false,
        flex: 1,
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
        field: "nPrograms",
        headerName: "No. Dept.",
        sortable: false,
        editable: false,
        flex: 1,
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
        headerName: "Center Name",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        editable: false,
        flex: 1,
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
        field: "nPrograms",
        headerName: "No. Dept.",
        sortable: false,
        editable: false,
        flex: 1,
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
              <Box>{formatNumber(params?.row?._count?.Comment)}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          formatNumber(params?.row?._count?.Comment),
      },
    ],
  ];
  const array = [{ text: "Approve" }, { text: "Reject" }];
  useEffect(() => {
    if(currentDepartment?.id){
      fetchProgramInDepartment(currentDepartment?.id)
    }
  },[currentDepartment])
  
  const handleSingleRow = async (row: any) => {
   
      dispatch(storeSingleProgram(row));
      dispatch(storeProgramFromStatus(Status.DEFAULT));
      navigate("/program-head/create");
      
  };

  const fetchProgramInDepartment = async (id: string) => {
    try {
      const res = await getProgramInDepartment(id);
      setCenters(res?.data?.programs);
      settotalBudget(res?.data?.totalBudget);
    } catch (error) {}
  };


  const handleBackFunctionality = () => {
 
  };


  return (
    <StyledBox className="appContainer">
      <Box className="breadcrumbs">
        <Typography className="breadcrumbs-item previous-item" onClick={() => navigate("/super-admin/review-budgets")}>Review Budgets Centre</Typography>
        <ArrowForwardIosIcon className="right-arrow" />
        <Typography className="breadcrumbs-item previous-item" onClick={() => navigate("/super-admin/review-budgets")} >Centre</Typography>
        <ArrowForwardIosIcon className="right-arrow" />
        <Typography className="breadcrumbs-item" onClick={() => navigate("/super-admin/review-budgets-departments")} >Department</Typography>
      </Box>
      <MainHeaderComponent
        array={array}
        action={true}
        title={""
         
        }
        subdes={currentDepartment.name}
        subheading="Review Budgets"
        btnTitle="Actions"
        subHeader={true}
        subTitle={`Total Budget: $${formatNumber(totalBudget)}`}
        onClick={handleBackFunctionality}
      />
      <TabsArea
        setTabstatus={setTabstatus}
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Approved" },
          { title: "Rejected" },
        ]}
        table={ tableColumnsProgram
        }
        row={center}
        onRowClick={handleSingleRow}
        // receiveProgramSearch={receiveProgramSearch}
      />
    </StyledBox>
  );
};

export default SuperReviewBudgetPrograms;
