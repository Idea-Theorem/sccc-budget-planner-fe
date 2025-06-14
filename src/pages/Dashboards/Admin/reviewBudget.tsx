import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../../components/MainHeader";
import TabsArea from "../../../components/Tabs";
import React, { useEffect, useState } from "react";
import Status from "../../../utils/dumpData";
import { getPendingPrograms } from "../../../services/adminServices";
import { getDepartmentOnRowCLick } from "../../../services/programServices";
import { useNavigate } from "react-router-dom";
import {
  storeProgramBudgetInDepartment,
  storeSingleDepart,
  storeSingleDepartName,
} from "../../../store/reducers/programSlice";
import { useDispatch } from "react-redux";
import { getSingleDepartments } from "../../../services/departmentServices";
import AttentionModal from "../../../models/AttentionModal";
import { capitalizeFirstLetter, formatNumber } from "../../../utils";
import { Stack } from "@mui/material";
import moment from "moment";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
}));
const ReviewBudgetScreen = () => {
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
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{capitalizeFirstLetter(params?.row?.status)}</Box>
            </Stack>
          );
        },
      },

      {
        field: "totalBudget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "_count.Program",
        headerName: "No. Programs",
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
        field: "totalComments",
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
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{capitalizeFirstLetter(params?.row?.status)}</Box>
            </Stack>
          );
        },
      },

      {
        field: "totalBudget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "_count.Program",
        headerName: "No. Programs",
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
        field: "totalComments",
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
        renderCell: (params: any) => {
          return (
            <Stack>
              <Box>{capitalizeFirstLetter(params?.row?.status)}</Box>
            </Stack>
          );
        },
      },

      {
        field: "totalBudget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "_count.Program",
        headerName: "No. Programs",
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
        field: "totalComments",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
      },
    ],
  ];
  const array = [{ text: "Approved" }, { text: "Rejected" }];

  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const [departmentList, setDepartmentList] = React.useState<any>([]);
  const [updateprogram, setUpdateprogram] = React.useState<any>([]);
  const [selectedRows, setSelectedRows] = React.useState<any>([]);
  const [attentionModal, setAttentionModal] = useState<any>(false);
  const [totalBudget, setTotalBudget] = useState<any>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = React.useState<string>("");
  useEffect(() => {
    fetchProgram(tabstatus, "");
  }, [tabstatus, updateprogram]);
  const fetchProgram = async (tabstatus: any, value: string) => {
    try {
      const response = await getPendingPrograms(tabstatus, value);
      setDepartmentList(response?.data);
      setTotalBudget(response?.data?.totalProgramBudget);
    } catch (error) {}
  };
  const handleStatusChange = (selectedStatus: any) => {
    if (selectedStatus === "Approved") {
      setStatus("APPROVED");
    } else if (selectedStatus === "Rejected") {
      setStatus("REJECTED");
    }
    setAttentionModal(true);
  };
  const handleActionReieve = (data: any) => {
    setSelectedRows(data);
  };
  const handleUpdate = async () => {
    const data = {
      departmentIds: selectedRows,
      status: status,
    };
    const response = await getSingleDepartments(data);
    setUpdateprogram(response?.data);
  };
  const onRowClick = async (data: any) => {
    if (data) {
      const response = await getDepartmentOnRowCLick(data?.id);
      dispatch(storeSingleDepart(response?.data?.programs));
      dispatch(storeSingleDepartName(data));
      dispatch(storeProgramBudgetInDepartment(response?.data?.totalBudget));
      navigate("/admin/recreation");
    }
  };

  const receiveProgramSearch = async (value: string) => {
    await fetchProgram(tabstatus, value);
  };

  const handleOK = async () => {
    await handleUpdate();
    setAttentionModal(false);
  };

  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        array={array}
        action={true}
        title="Review Budgets"
        btnTitle="Actions"
        subTitle={`Total Budget: $${formatNumber(totalBudget)}`}
        onStatusChange={handleStatusChange}
        subHeader={true}
      />
      <TabsArea
        setTabstatus={setTabstatus}
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Approved" },
          { title: "Rejected" },
        ]}
        table={tableColumnsTitleArray}
        row={departmentList?.departments}
        currentStatus={status}
        handleActionReieve={handleActionReieve}
        onRowClick={onRowClick}
        checkout={true}
        receiveProgramSearch={receiveProgramSearch}
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

export default ReviewBudgetScreen;
