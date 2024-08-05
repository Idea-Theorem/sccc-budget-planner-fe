import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../../components/Tabs";
import Typography from "@mui/material/Typography";
import SubHeader from "../../../components/SubHeader";
import ApprovedProgram from "../ProgramHead/approvedProgram";
import {
  getAllProgramsViaStatus,
  updateProgram,
} from "../../../services/programServices";
import React, { useEffect, useState } from "react";
import Status from "../../../utils/dumpData";
import { useDispatch, useSelector } from "react-redux";
import { storeProgramList } from "../../../store/reducers/programSlice";
import { RootState } from "../../../store";
import SelectDemo from "../../../components/Select";
import {
  departmentCount,
  getAllDepartments,
  getSingleDepartments,
} from "../../../services/departmentServices";
import StatusModal from "../../../components/StatusModal";
import AttentionModal from "../../../models/AttentionModal";
import { getProgramInDepartment } from "../../../services/centersServices";
import { capitalizeFirstLetter, formatNumber } from "../../../utils";
import { CircularProgress, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import moment from "moment";
const StyledBox = styled(Box)(() => ({
  "& .reviewBudgetHead": {
    marginBottom: "15px",
    position: "relative",
  },

  "& .totalBudgetText": {
    fontSize: "16px",
    fontWeight: "400",
    marginTop: "5px",
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
const LoadingContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  zIndex: 9999,
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
          moment(params?.row?.created_at).format("D-MMM YYYY"),
      },
      {
        field: "commentCount",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>
                {params?.row?.commentCount
                  ? params?.row?.commentCount
                  : params?.row?._count?.Comment}
              </Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          params?.row?.commentCount
            ? params?.row?.commentCount
            : params?.row?._count?.Comment,
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
          moment(params?.row?.created_at).format("D-MMM YYYY"),
      },
      {
        field: "commentCount",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>
                {params?.row?.commentCount
                  ? params?.row?.commentCount
                  : params?.row?._count?.Comment}
              </Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          params?.row?.commentCount
            ? params?.row?.commentCount
            : params?.row?._count?.Comment,
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
          moment(params?.row?.created_at).format("D-MMM YYYY"),
      },
      {
        field: "commentCount",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>
                {params?.row?.commentCount
                  ? params?.row?.commentCount
                  : params?.row?._count?.Comment}
              </Box>
            </Stack>
          );
        },
        valueGetter: (params: any) =>
          params?.row?.commentCount
            ? params?.row?.commentCount
            : params?.row?._count?.Comment,
      },
    ],
  ];
  const { programList } = useSelector((state: RootState) => state.program);
  const dispatch = useDispatch();
  const [status, setStatus] = useState<string>("");
  const [tabstatus, setTabstatus] = React.useState<any>(Status.PENDING);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [updateprogram, setUpdateprogram] = useState<string[]>([]);
  const [departments, setDepartments] = useState<any>([]);
  const [count, setCount] = useState<any>(null);
  const [departmentId, setDepartmentID] = useState<any>(null);
  const [totalCount, setTotalCount] = useState<any>(null);
  const [attentionModal, setAttentionModal] = useState<any>(false);
  const [activeDepartment, setActiveDepartment] = useState<any>("");
  const [statusData, setStatusData] = useState<any>(null);
  const [totalBudget, settotalBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    fetchDepartments();
  }, []);
  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments("");
      setDepartmentID(response?.data?.departments[0]?.id);
      setActiveDepartment(response?.data?.departments[0]?.name);
      settotalBudget(response?.data?.departments[0]?.value);

      setDepartments(response?.data?.departments);
    } catch (error) {}
  };

  useEffect(() => {
    if (tabstatus == "APPROVED") {
      if (departmentId) {
        getDepartmentCount(departmentId);
      }
    }
  }, [tabstatus, departmentId]);

  const receiveDepartment = async (value: any) => {
    try {
      setLoading(true);
      const filteredID = departments.find((item: any) => item?.name === value);
      setActiveDepartment(filteredID?.name);
      setDepartmentID(filteredID?.id);
      const res = await getProgramInDepartment(filteredID?.id);
      dispatch(storeProgramList(res?.data?.programs));
      settotalBudget(res?.data?.totalBudget);
      getDepartmentCount(filteredID?.id);
      setTabstatus(Status.PENDING);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getDepartmentCount = async (id: any) => {
    try {
      const response = await departmentCount(id);
      setCount(response?.data?.approvedCount);
      setTotalCount(
        response?.data?.approvedCount + response?.data?.pendingCount
      );
    } catch (error) {}
  };

  useEffect(() => {
    fetchProgram("");
  }, [updateprogram, activeDepartment, tabstatus]);
  const fetchProgram = async (value: string) => {
    try {
      const response = await getAllProgramsViaStatus(tabstatus, value);
      const newArray = response?.data?.programs?.filter(
        (item: any) => item?.department?.id === departmentId
      );
      dispatch(storeProgramList(newArray));
    } catch (error) {}
  };
  const handleStatusChange = (selectedStatus: any) => {
    if (selectedStatus === "Approve") {
      setStatus("APPROVED");
    } else if (selectedStatus === "Reject") {
      setStatus("REJECTED");
    }
    setAttentionModal(true);
  };
  const handleActionReieve = (data: any) => {
    setSelectedRows(data);
  };
  const handleUpdate = async () => {
    const data = {
      progamIds: selectedRows,
      status: status,
    };
    const response = await updateProgram(data);
    setUpdateprogram(response?.data);
  };

  const handleSumbit = async () => {
    let obj = {
      departmentIds: [departmentId],
      status: Status.PENDING,
    };
    try {
      await getSingleDepartments(obj);
      setStatusData({
        type: "success",
        message: "Department Status Updated Successfully",
      });
    } catch (error: any) {
      setStatusData({
        type: "error",
        message: error.response.data.message,
      });
    }
  };

  const receiveProgramSearch = async (value: string) => {
    await fetchProgram(value);
  };
  const handleOK = async () => {
    await handleUpdate();
    setAttentionModal(false);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }
  return (
    <StyledBox className="appContainer">
      <Box className="reviewBudgetHead">
        <Typography variant="h3">Review Budgets</Typography>
      </Box>
      <SubHeader title="" onStatusChange={handleStatusChange} />
      <Box className="block-selection">
        <SelectDemo
          parentClass="departmentSelect"
          title=""
          receiveValue={receiveDepartment}
          list={departments}
          value={activeDepartment}
          placeholder="Please Select"
        />
        <Typography className="totalBudgetText">
          Total Budget: ${formatNumber(totalBudget)}
        </Typography>
      </Box>
      <Box className="customSelect">
        <Box
          className={`${
            tabstatus == Status.APPROVED &&
            location.pathname == "/department-head/review-budgets"
              ? "approvedTableBlock"
              : ""
          } `}
        >
          {tabstatus == Status.APPROVED && (
            <Box className="approvedProgramBlock">
              <ApprovedProgram
                tabstatus={tabstatus}
                count={count}
                totalCount={totalCount}
                handleClick={() => handleSumbit()}
              />
            </Box>
          )}
          <TabsArea
            showCursor={true}
            tabsTitleArray={[
              { title: "Pending" },
              { title: "Approved" },
              { title: "Rejected" },
            ]}
            setTabstatus={setTabstatus}
            row={programList}
            table={tableColumnsTitleArray}
            currentStatus={status}
            handleActionReieve={handleActionReieve}
            checkout={true}
            receiveProgramSearch={receiveProgramSearch}
            approveTabAcriveClass={true}
          />
        </Box>
      </Box>

      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
      <AttentionModal
        open={attentionModal}
        handleClose={() => setAttentionModal(false)}
        handleOK={handleOK}
        heading="Attention"
        text="You are changing the status of the program"
      />
    </StyledBox>
  );
};

export default DHReviewBudgets;
