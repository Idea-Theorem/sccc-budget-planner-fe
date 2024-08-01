import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../components/MainHeader";
import TabsArea from "../../components/Tabs";
import {
  getDepartmentInCenters,
} from "../../services/centersServices";
import React, { useEffect, useState } from "react";
import Status from "../../utils/dumpData";
import { capitalizeFirstLetter, formatNumber } from "../../utils";
import { Stack, Typography } from "@mui/material";
import moment from "moment";
import {
  storeCurrentDepartment,

} from "../../store/reducers/programSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
}));

const SuperReviewBudgetDepartment = () => {
  const [center, setCenters] = useState([]);
  const [totalBudget, settotalBudget] = useState("");
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const { currentCenter } = useSelector(
    (state: RootState) => state.program
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(tabstatus);



  const tableColumnsDepartment = [
    [
      {
        field: "name",
        headerName: "Department Name",
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
        field: "totalAmount",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "profit",
        headerName: "Profit",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "nPrograms",
        headerName: "No. Programs",
        // headerName: 'No. Dept.',
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{params?.row?._count?.Program}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) => params?.row?._count?.Program,
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
        field: "totalComments",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
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
        field: "totalAmount",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
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
        field: "totalAmount",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
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
      },
    ],
  ];
 
  const array = [{ text: "Approve" }, { text: "Reject" }];
useEffect(() => {
  if(currentCenter?.id){
    fetchDepartmentInCenter(currentCenter?.id)
  }
},[currentCenter])

 const fetchDepartmentInCenter = async (id: any) => {
  const res = await getDepartmentInCenters(id);
      setCenters(res?.data?.center?.department);
      settotalBudget(res?.data?.center?.totalDepartmentBudget);
 }

  const handleSingleRow = async (row: any) => {
  
      dispatch(storeCurrentDepartment(row));
      navigate('/super-admin/review-budgets-program ')  
   
  };



  const handleBackFunctionality = () => {
  
  };



  return (
    <StyledBox className="appContainer">
       <Box className="back">
        <Typography >Review Budgets</Typography>
        <ArrowForwardIosIcon className="right-arrow" />
        <Typography onClick={() => navigate("/super-admin/review-budgets")} >Centre</Typography>
      </Box>
      <MainHeaderComponent
        array={array}
        action={true}
        title={
        ""
        }
        subdes={currentCenter?.name}
        subheading=""
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
        table={ tableColumnsDepartment }
        row={center}
        onRowClick={handleSingleRow}
     
      />
    </StyledBox>
  );
};

export default SuperReviewBudgetDepartment;
