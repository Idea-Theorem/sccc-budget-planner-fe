import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../../components/MainHeader";
import TabsArea from "../../../components/Tabs";
import { useNavigate } from "react-router-dom";
import {
  storeProgramFromStatus,
  storeSingleProgram,
} from "../../../store/reducers/programSlice";
import Status from "../../../utils/dumpData";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { getAllProgramsViaStatus } from "../../../services/programServices";
const StyledBox = styled(Box)(() => ({
  "&.appContainer": {
    ".appHeader": {
      paddingBottom: "9px",
    },
  },
}));
const ProgramsDraftScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [program, setPrograms] = useState([])
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
        headerName: "Previous Year Budget",
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

  React.useEffect(() => { 
    fetchProgramList();
  }, []);
  const fetchProgramList = async () => {
    try {
      const response = await getAllProgramsViaStatus(Status.DRAFTED);
      setPrograms(response?.data?.programs)
    } catch (error) {
    }
  };


  const onRowClick = (rowData: any) => {
    dispatch(storeSingleProgram(rowData));
    dispatch(storeProgramFromStatus(Status.DRAFTED));
    navigate("/program-head/create");
  }
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        title="Programs"
        btnTitle="Create New Programs"
        onClick={() => {
          navigate("/program-head/create");
          dispatch(storeSingleProgram(null));
          dispatch(storeProgramFromStatus(Status.CREATED));
        }}
      />
      <TabsArea
        tabsTitleArray={[{ title: "Drafts" }]}
        table={tableColumnsTitleArray}
        row={program}
        onRowClick={onRowClick}
      />
    </StyledBox>
  );
};

export default ProgramsDraftScreen;
