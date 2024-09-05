import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../../components/MainHeader";
import TabsArea from "../../../components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import {
  storeProgramFromStatus,
  storeSingleProgram,
} from "../../../store/reducers/programSlice";
import Status from "../../../utils/dumpData";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAllProgramsByUsers } from "../../../services/programServices";
import StatusModal from "../../../components/StatusModal";
import { Stack } from "@mui/material";
import { capitalizeFirstLetter, formatNumber } from "../../../utils";
import moment from "moment";
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
  const [program, setPrograms] = useState([]);
  const [statusData, setStatusData] = useState<any>(null);
  const location = useLocation();

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
          moment(params.row?.created_at).format("D-MMM YYYY"),
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
  useEffect(() => {
    if (location.state) {
      const { message, type } = location.state;
      setStatusData({
        type: type,
        message: message,
      });
    }
  }, [location.state]);

  React.useEffect(() => {
    fetchProgramList(Status.DRAFTED, "");
  }, []);
  const fetchProgramList = async (status: string, Searchvalue: string) => {
    try {
      const response = await getAllProgramsByUsers(status, Searchvalue);
      setPrograms(response?.data?.programs);
    } catch (error) {}
  };

  const onRowClick = (rowData: any) => {
    dispatch(storeSingleProgram(rowData));
    dispatch(storeProgramFromStatus(Status.DRAFTED));
    navigate("/program-head/create");
  };
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
        showCursor={true}
      />
      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
    </StyledBox>
  );
};

export default ProgramsDraftScreen;
