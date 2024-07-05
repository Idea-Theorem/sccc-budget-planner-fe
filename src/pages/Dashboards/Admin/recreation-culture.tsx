import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../../components/Tabs";
import Status from "../../../utils/dumpData";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatNumber } from "../../../utils";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
  },

  "& .right-arrow": {
    width: "15px",
    height: "15px",
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
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "lYearBudget",
        headerName: "Last Year Budget",
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
        field: "profit",
        headerName: "Profit",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "nPrograms",
        headerName: "No. Programs",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "sDate",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
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
        field: "lYearBudget",
        headerName: "Last Year Budget",
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
        field: "profit",
        headerName: "Profit",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "nPrograms",
        headerName: "No. Programs",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "sDate",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
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
        field: "lYearBudget",
        headerName: "Last Year Budget",
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
        field: "profit",
        headerName: "Profit",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "nPrograms",
        headerName: "No. Programs",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "sDate",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
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
  const { singleDepart } = useSelector((state: RootState) => state.program);
  const { singleDepartName, programBudgetInDepartment } = useSelector(
    (state: RootState) => state.program
  );

  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  console.log(tabstatus);
  const [status, setStatus] = React.useState<string>("");
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/admin/review-budget");
  };

  useEffect(() => {
    if (false) {
      setStatus("");
    }
  }, []);
  return (
    <StyledBox className="appContainer">
      <Box className="back">
        <ArrowBackIosIcon className="right-arrow" />
        <Typography onClick={() => goBack()}>Back</Typography>
      </Box>
      <Typography>{singleDepartName?.name}</Typography>
      <Typography>
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
        row={singleDepart}
        currentStatus={status}
      />
    </StyledBox>
  );
};

export default RecreationAndCultureScreen;
