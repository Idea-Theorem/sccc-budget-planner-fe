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
import { getAllProgramsByUsers } from "../../../services/programServices";
import { io } from "socket.io-client";
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
      prevTabs.map((item) =>
        item.title.startsWith("●") ? { ...item, title: status } : item
      )
    );
  };

  const fetchProgramList = async (status: string, Searchvalue: string) => {
    try {
      // setLoading(true);

      const response = await getAllProgramsByUsers(status, Searchvalue);
      setprogramListing(response?.data?.programs);
      // dispatch(storeProgramList(response?.data?.programs));
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
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
        field: "  ",
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
        field: "  ",
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
        field: "  ",
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

  React.useEffect(() => {
    const socket = io("http://localhost:5000"); // Replace with your server URL
    socket.on("programStatusUpdated", ({ programId, newStatus }: any) => {
      updateTabTitle(newStatus);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
    </StyledBox>
  );
};

export default PHProgramsScreen;
