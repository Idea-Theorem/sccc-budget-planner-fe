import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../../components/MainHeader";
import TabsArea from "../../../components/Tabs";
import React, { useEffect } from "react";
import Status from "../../../utils/dumpData";
import { getPendingPrograms } from "../../../services/adminServices";
import { getDepartmentOnRowCLick } from "../../../services/programServices";
import { useNavigate } from "react-router-dom";
import { storeSingleDepart, storeSingleDepartName } from "../../../store/reducers/programSlice";
import { useDispatch} from "react-redux";
import { getSingleDepartments } from "../../../services/departmentServices";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,
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
  const array = [
    {text: "Approved"},
    {text: "Rejected"},
  ]
  
 
  const [tabstatus, setTabstatus] = React.useState(Status.PENDING);
  const [departmentList, setDepartmentList] = React.useState<any>([]);
  const [updateprogram, setUpdateprogram] = React.useState<any>([]);
  const [selectedRows, setSelectedRows] = React.useState<any>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [status, setStatus] = React.useState<string>("");
  useEffect(() => {
    fetchProgram(tabstatus, "");
    
  }, [tabstatus, updateprogram]);
  const fetchProgram = async (tabstatus: any, value: string) => {
    try {
      const response = await getPendingPrograms(tabstatus, value);
      setDepartmentList(response?.data)
    } catch (error) {}
  };
  const handleStatusChange = (selectedStatus: any) => {
    if (selectedStatus === "Approve") {
      setStatus("APPROVED");
    } else if (selectedStatus === "Rejected") {
      setStatus("REJECTED");
    }
  };
  const handleActionReieve = (data: any) => {
    setSelectedRows(data);
  };
  const handleUpdate = async (selectedOption: any) => {
    const data = {
      departmentIds: selectedRows,
      status: selectedOption,
    };
    const response = await getSingleDepartments(data);
    setUpdateprogram(response?.data);
  };
  const onRowClick = async (data: any)=>{
  if(data){
    const response  = await getDepartmentOnRowCLick(data?.id)
    dispatch(storeSingleDepart(response?.data?.departments))
    dispatch(storeSingleDepartName(data))
    navigate("/admin/recreation")
  }
    
  }

  const receiveProgramSearch = async (value: string) => {
     await fetchProgram(tabstatus, value)
  }

  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        array={array}
        action={true} 
        title="Review Budgets"
        btnTitle="Actions"
        onStatusChange={handleStatusChange}
        handleUpdate={handleUpdate}
      /> 
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
        row={departmentList?.departments}
        currentStatus={status}
        handleActionReieve={handleActionReieve}
        onRowClick = {onRowClick}
        checkout={true}
        receiveProgramSearch={receiveProgramSearch}
      />
    </StyledBox> 
  );
};

export default ReviewBudgetScreen;
