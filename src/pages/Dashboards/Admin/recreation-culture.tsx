import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../../components/Tabs";
import Status from "../../../utils/dumpData";
import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter, formatNumber } from "../../../utils";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import moment from "moment";
import {
  storeProgramFromStatus,
  storeSingleProgram,
} from "../../../store/reducers/programSlice";
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
    fontSize: "18px",
    lineHeight: "22.23px",
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
      },
    ],
  ];
  const { singleDepart } = useSelector((state: RootState) => state.program);
  const { singleDepartName, programBudgetInDepartment } = useSelector(
    (state: RootState) => state.program
  );
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const [programInDepartment, setProgramInDepartment] = React.useState<any>([]);
  const dispatch = useDispatch();
  console.log(tabstatus);
  const [status, setStatus] = React.useState<string>("");
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/admin/review-budget");
  };

  useEffect(() => {
    const filteredArray = singleDepart.filter(
      (item) => item?.status?.toLowerCase() == tabstatus?.toLowerCase()
    );
    setProgramInDepartment(filteredArray);
    if (false) {
      setStatus("");
    }
  }, [tabstatus]);

  const onRowClick = (data: any) => {
    if (data?.status == Status.PENDING) {
      dispatch(storeSingleProgram(data));
      dispatch(storeProgramFromStatus(Status.DEFAULT));
      navigate("/program-head/create");
    }
  };
  return (
    <StyledBox className="appContainer">
      <Box className="back">
        <ArrowBackIosIcon className="right-arrow" />
        <Typography onClick={() => goBack()}>Back</Typography>
      </Box>
      <Typography className="name">{singleDepartName?.name}</Typography>
      <Typography className="amount-text">
        Total Budget: ${formatNumber(programBudgetInDepartment)}
      </Typography>
      <TabsArea
        setTabstatus={setTabstatus}
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Approved" },
          { title: "Rejected" },
          // { title: "Drafts" },
          // { title: "History" },
        ]}
        table={tableColumnsTitleArray}
        row={programInDepartment}
        currentStatus={status}
        onRowClick={onRowClick}
      />
    </StyledBox>
  );
};

export default RecreationAndCultureScreen;
