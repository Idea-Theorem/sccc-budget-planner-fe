import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../../components/Tabs";
import Typography from "@mui/material/Typography";
import SubHeader from "../../../components/SubHeader";
import ApprovedProgram from "../ProgramHead/approvedProgram";
import { getProgram, updateProgram } from "../../../services/programServices";
import React, { useEffect, useState } from "react";
import Status from "../../../utils/dumpData";
import { useDispatch, useSelector } from "react-redux";
import { storeProgramList } from "../../../store/reducers/programSlice";
import { RootState } from "../../../store";
const StyledBox = styled(Box)(() => ({
  "& .reviewBudgetHead": {
    marginBottom: "23px",
  },

  "& .totalBudgetText": {
    fontSize: "20px",
    fontWeight: "400",
    marginTop: "-10px",
    marginBottom: "8px",
  },
  // Color: theme.palette.secondary.light,

  "& .approvedTableBlock": {
    position: "relative",

    "& .MuiTabs-root": {
      marginBottom: "66px",
    },
  },

  "& .approvedProgramBlock": {
    position: "absolute",
    left: "0",
    top: "63px",
    width: "100%",

    "& .divider": {
      margin: "0 4px",
    },
  },
}));
const DHReviewBudgets = () => {
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
        field: "budget",
        headerName: "Budget",
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
      // {
      //   field: "profit",
      //   headerName: "Profit",
      //   sortable: false,
      //   editable: false,
      //   flex: 1,
      // },
      // {
      //   field: "nPrograms",
      //   headerName: "No. Programs",
      //   sortable: false,
      //   editable: false,
      //   flex: 1,
      // },
      {
        field: "created_at",
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
        field: "department.name",
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
  ];
  const { programList } = useSelector((state: RootState) => state.program);
  const dispatch = useDispatch();
  const [status, setStatus] = useState<string>("");
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [updateprogram, setUpdateprogram] = useState<string[]>([]);

  useEffect(() => {
    fetchProgram();
  }, [updateprogram]);
  const fetchProgram = async () => {
    try {
      const response = await getProgram(tabstatus);
      dispatch(storeProgramList(response?.data?.programs));
    } catch (error) {}
  };
  const handleStatusChange = (selectedStatus: any) => {
    if(selectedStatus === "Approve"){
      setStatus("APPROVED")
    } else if(selectedStatus === "Rejected"){
      setStatus("REJECTED")
    }
  };
  const handleActionReieve = (data: any) => {
    setSelectedRows(data);
  };
  const handleUpdate =async (selectedOption: any)=>{

    const data = {
      progamIds: selectedRows,
      status: selectedOption,
    };
  const response = await updateProgram(data)
  setUpdateprogram(response?.data)
  }

  return (
    <StyledBox className="appContainer">
      <Box className="reviewBudgetHead">
        <Typography variant="h3">Review Budgets</Typography>
      </Box>
      <SubHeader
      handleUpdate={handleUpdate}
        title="Recreation & Culture"
        onStatusChange={handleStatusChange}
      />
      <Typography className="totalBudgetText">
        Total Budget: $00,000.00
      </Typography>
      <Box className="approvedTableBlock">
        <Box className="approvedProgramBlock">
          <ApprovedProgram />
        </Box>
        <TabsArea
          setTabstatus={setTabstatus}
          tabsTitleArray={[
            { title: "Pending" },
            { title: "Approved" },
            { title: "Rejected" },
          ]}
          table={tableColumnsTitleArray}
          row={programList}
          currentStatus={status}
          handleActionReieve={handleActionReieve}
        />
      </Box>
    </StyledBox>
  );
};

export default DHReviewBudgets;
