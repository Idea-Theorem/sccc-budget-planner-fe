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
import React, { useEffect, useState } from "react";
import {
  deleteProgram,
  getAllProgramsByUsers,
} from "../../../services/programServices";
import { io } from "socket.io-client";
import { Button, Stack } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteModal from "../../../models/DeleteModal";
import {
  capitalizeFirstLetter,
  formatNumber,
  liveUrl,
  transformString,
} from "../../../utils";
import moment from "moment";

const StyledBox = styled(Box)(() => ({
  "&.appContainer": {
    ".appHeader": {
      paddingBottom: "9px",
    },
  },
}));
const PHProgramsScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const [programListing, setprogramListing] = useState<any>([]);
  const [selectedRowdelete, setSelectedDelete] = useState<any>(null);
  const [deleteModalOpen, setDeleteModal] = useState<any>(false);
  const [tabsTitleArray, setTabsTitleArray] = React.useState([
    { title: "Pending" },
    { title: "Approved" },
    { title: "Rejected" },
    { title: "Drafts" },
    { title: "History" },
  ]);
  useEffect(() => {
    removeDot(tabstatus);
    fetchProgramList(tabstatus, "");
  }, [tabstatus]);

  const updateTabTitle = (tabstatus: string) => {
    setTabsTitleArray((prevTabs) =>
      prevTabs.map((tab) => {
        switch (tab.title) {
          case "Pending":
            return tabstatus === "PENDING"
              ? { ...tab, title: "● Pending" }
              : { ...tab, title: "Pending" };
          case "Approved":
            return tabstatus === "APPROVED"
              ? { ...tab, title: "● Approved" }
              : { ...tab, title: "Approved" };
          case "Rejected":
            return tabstatus === "REJECTED"
              ? { ...tab, title: "● Rejected" }
              : { ...tab, title: "Rejected" };
          case "Drafts":
            return tabstatus === "DRAFTED"
              ? { ...tab, title: "● Drafts" }
              : { ...tab, title: "Drafts" };
          default:
            return tab;
        }
      })
    );
  };
  const removeDot = (status: string) => {
    setTabsTitleArray((prevTabs) =>
      prevTabs.map((item) => {
        const titleWithoutDot = item.title.startsWith("●")
          ? item.title.slice(2)
          : item.title;
        if (transformString(titleWithoutDot) === status.toLowerCase()) {
          return {
            ...item,
            title:
              status == "PENDING"
                ? "Pending"
                : status == "APPROVED"
                ? "Approved"
                : status == "REJECTED"
                ? "Rejected"
                : status == "DRAFTED"
                ? "Drafts"
                : "",
          };
        }
        return item;
      })
    );
  };

  const fetchProgramList = async (status: string, Searchvalue: string) => {
    try {
      const response = await getAllProgramsByUsers(status, Searchvalue);
      setprogramListing(response?.data?.programs);
    } catch (error) {}
  };

  const handleDelete = (rowData: any) => {
    setSelectedDelete(rowData?.id);
    setDeleteModal(true);
  };

  const handleDeleteConfirmation = async () => {
    if (selectedRowdelete) {
      try {
        await deleteProgram(selectedRowdelete);
        fetchProgramList(Status.EXPIRED, "");
        setDeleteModal(false);
      } catch (error) {
        console.error("Error deleting record:", error);
      }
    }
  };

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
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{moment(params?.row?.created_at).format("D-MMM YYYY")}</Box>
            </Stack>
          );
        },
      },
      {
        field: "buttonsColumn",
        headerName: "",
        flex: 1,
        renderCell: (params: any) => (
          <Stack
            direction="row"
            gap="10px"
            alignItems="center"
            ml="auto"
            className="actions-btn-holder"
          >
            <Button
              variant="text"
              size="small"
              startIcon={<DeleteOutlineIcon />}
              onClick={() => handleDelete(params.row)}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<EditNoteIcon />}
              onClick={() => handleEdithistoryRecord(params.row)}
            >
              Edit
            </Button>
          </Stack>
        ),
      },
    ],
  ];

  React.useEffect(() => {
    const socket = io(liveUrl); // Replace with your server URL
    socket.on("programStatusUpdated", ({ newStatus }: any) => {
      updateTabTitle(newStatus);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleEdithistoryRecord = (data: any) => {
    dispatch(storeSingleProgram(data));
    dispatch(storeProgramFromStatus(Status.CREATED));
    navigate("/program-head/expire");
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
        tabsTitleArray={tabsTitleArray}
        setTabstatus={setTabstatus}
        table={tableColumnsTitleArray}
        row={programListing}
        checkout={false}
        fetchProgramList={fetchProgramList}
      />
      <DeleteModal
        heading="Are you sure you want to delete?"
        open={deleteModalOpen}
        handleClose={() => setDeleteModal(false)}
        handleOK={() => handleDeleteConfirmation()}
      />
    </StyledBox>
  );
};

export default PHProgramsScreen;
