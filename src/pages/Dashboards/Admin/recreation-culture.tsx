import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../../components/Tabs";
import Status from "../../../utils/dumpData";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { RootState } from "../../../store";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,
}));
const RecreationAndCultureScreen = ({}: any) => {
  const tableColumnsTitleArray = [
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
  const { singleDepartName } = useSelector((state: RootState) => state.program);
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING); 
  const [status, setStatus] = React.useState<string>("");
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/admin/review-budget")
    
  };

  useEffect(() => {
    if(false){
      setStatus("")
    }
  }, [])
  return (
    <StyledBox className="appContainer">
        <Typography onClick={()=> goBack()}>Back</Typography>
        <Typography>{singleDepartName?.name}</Typography>
        <Typography>Total Budget: $00,000,00</Typography>
      <TabsArea
      setTabstatus={setTabstatus}
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Approved" },
          { title: "Rejected" },
          { title: "Drafts" },
          { title: "History" },
        ]}
        table={tableColumnsTitleArray}
        row={singleDepart}
        currentStatus={status}
      />
    </StyledBox> 
  );
};

export default RecreationAndCultureScreen;
