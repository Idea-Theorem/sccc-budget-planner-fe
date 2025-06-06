import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../components/MainHeader";
import TabsArea from "../../components/Tabs";
import {
  getAllCenters,
  getDepartmentInCenters,
  getProgramInDepartment,
} from "../../services/centersServices";
import { useEffect, useState } from "react";
import Status from "../../utils/dumpData";
import { getPrograms } from "../../services/adminServices";
import { formatNumber } from "../../utils";
import { Stack } from "@mui/material";
import moment from "moment";
import {
  storeProgramFromStatus,
  storeSingleProgram,
} from "../../store/reducers/programSlice";
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
  },
}));
const SuperReviewBudget = () => {
  const [center, setCenters] = useState([]);
  const [currenttitle, setCurrentTitle] = useState("");
  const [totalBudget, settotalBudget] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const tableColumnsTitleArray = [
    [
      {
        field: "name",
        headerName:
          step == 0
            ? "Center Name"
            : step == 1
            ? "Department Name"
            : "Program Name",
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
        headerName:
          step == 0 ? "No. Dept." : step == 1 ? "No. Programs" : "No. Programs",

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
    if (step == 2) {
      if (row?.status == Status.PENDING) {
        dispatch(storeSingleProgram(row));
        dispatch(storeProgramFromStatus(Status.DEFAULT));
        navigate("/program-head/create");
      }
      return;
    }
    if (step == 1) {
      fetchProgramInDepartment(row.id);
      setCurrentTitle(row.name);
      setStep(2);
      return;
    }
    setCurrentTitle(row.name);
    try {
      const res = await getDepartmentInCenters(row?.id);
      setCenters(res?.data?.center?.department);
      settotalBudget(res?.data?.center?.totalDepartmentBudget);
      setStep(1);
    } catch (error) {}
  };

  const fetchProgramInDepartment = async (id: string) => {
    try {
      const res = await getProgramInDepartment(id);
      setCenters(res?.data?.programs);
      settotalBudget(res?.data?.totalBudget);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCenter("");
  }, []);

  const handleBackFunctionality = () => {
    setCurrentTitle("");
    fetchCenter("");
    setStep(0);
  };

  const receiveProgramSearch = async (value: string) => {
    if (step === 0) {
      await fetchCenter(value);
    }
  };

  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        array={array}
        action={true}
        title={
          step == 0
            ? "Review Budgets"
            : step == 1
            ? "Review Budgets: Center  >  Departments"
            : step == 2
            ? "Review Budgets: Center  >  Departments > Program"
            : ""
        }
        subdes={currenttitle}
        btnTitle="Actions"
        subHeader={true}
        subTitle={`Total Budget: $${formatNumber(totalBudget)}`}
        onClick={handleBackFunctionality}
        step={step}
      />
      <TabsArea
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Approved" },
          { title: "Rejected" },
        ]}
        table={tableColumnsTitleArray}
        row={center}
        onRowClick={handleSingleRow}
        receiveProgramSearch={receiveProgramSearch}
      />
    </StyledBox>
  );
};

export default SuperReviewBudget;
