import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../components/MainHeader";
import TabsArea from "../../components/Tabs";
import {
  getAllCenters,
  getDepartmentInCenters,
} from "../../services/centersServices";
import React, { useEffect, useState } from "react";
import Status from "../../utils/dumpData";
import { getPrograms } from "../../services/adminServices";
import { capitalizeFirstLetter, formatNumber } from "../../utils";
import { Stack } from "@mui/material";
import moment from "moment";
import { storeCurrentCenter } from "../../store/reducers/programSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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

const SuperReviewBudget = () => {
  const [center, setCenters] = useState([]);
  const [totalBudget, settotalBudget] = useState("");
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(tabstatus);

  const tableColumnsCenter = [
    [
      {
        field: "name",
        headerName: "Center Name",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "totalIncomeSum",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>${formatNumber(params?.row?.totalIncomeSum)}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) => formatNumber(params?.row?.totalIncomeSum),
      },

      {
        field: "nPrograms",
        headerName: "No. Dept.",

        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{params?.row?.Department?.length}</Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          formatNumber(params?.row?.Department?.length),
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
        field: "budget",
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
        field: "budget",
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

  const fetchCenter = async (value: string) => {
    try {
      const response = await getAllCenters(value);
      const res = await getPrograms();
      settotalBudget(res?.data?.totalApprovedProgrambudget);
      setCenters(response?.data?.centers);
    } catch (error) {}
  };
  const handleSingleRow = async (row: any) => {
    try {
      dispatch(storeCurrentCenter(row));
      navigate("/super-admin/review-budgets-departments");
      const res = await getDepartmentInCenters(row?.id);
      setCenters(res?.data?.center?.department);
      settotalBudget(res?.data?.center?.totalDepartmentBudget);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCenter("");
  }, []);

  const handleBackFunctionality = () => {};

  const receiveProgramSearch = async (value: string) => {
    await fetchCenter(value);
  };

  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        array={array}
        action={true}
        title={""}
        subdes={""}
        subheading="Review Budgets"
        btnTitle="Actions"
        subHeader={true}
        subTitle={`Total Budget: $${formatNumber(totalBudget)}`}
        onClick={handleBackFunctionality}
      />
      <TabsArea
        showCursor={true}
        setTabstatus={setTabstatus}
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Approved" },
          { title: "Rejected" },
        ]}
        table={tableColumnsCenter}
        row={center}
        onRowClick={handleSingleRow}
        receiveProgramSearch={receiveProgramSearch}
      />
    </StyledBox>
  );
};

export default SuperReviewBudget;
