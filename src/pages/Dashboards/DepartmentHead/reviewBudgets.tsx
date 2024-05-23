import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../../components/Tabs";
import Typography from "@mui/material/Typography";
import SubHeader from "../../../components/SubHeader";
import ApprovedProgram from "../ProgramHead/approvedProgram";
import { getAllProgramsViaStatus, updateProgram } from "../../../services/programServices";
import React, { useEffect, useState } from "react";
import Status from "../../../utils/dumpData";
import { useDispatch, useSelector } from "react-redux";
import { storeProgramList } from "../../../store/reducers/programSlice";
import { RootState } from "../../../store";
import SelectDemo from "../../../components/Select";
import { departmentCount, getAllDepartments, getSingleDepartments } from "../../../services/departmentServices";
import StatusModal from "../../../components/StatusModal";
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
        headerName: "Previous Year Budget",
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
  const [departments, setDepartments] = useState<any>([]);
  const [count, setCount] = useState<any>(null);
  const [departmentId, setDepartmentID] = useState<any>(null);
  const [totalCount, setTotalCount] = useState<any>(null);
  const [programListing, setprogramListing] = useState<any>([]);
  const [filteredProgramListing, setFilteredProgramListing] = useState<any>([]);
  dispatch(storeProgramList(filteredProgramListing)); 
  const [activeDepartment, setActiveDepartment] = useState<any>("");
  const [statusData, setStatusData] = useState<any>(null);

  useEffect(()=>{
    fetchDepartments()
  },[])
  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments("");
       response?.data?.departments.find((item: any) => item?.name === activeDepartment);
      setDepartmentID(response?.data?.departments[0]?.id)
      setActiveDepartment(response?.data?.departments[0]?.name)
      setDepartments(response?.data?.departments);
    } catch (error) {}
  };
  useEffect(()=>{
    if(departmentId){
      getDepartmentCount(departmentId)
    }

  },[tabstatus])
  const receiveDepartment = (value: any) => {
    const filteredID = departments.find((item: any) => item?.name === value);
    setActiveDepartment(filteredID?.name);
    setDepartmentID(filteredID?.id)
    const filteredProgramList = programListing?.filter((item: any)=> item?.department_id === filteredID?.id)
    dispatch(storeProgramList(filteredProgramList)); 
    getDepartmentCount(filteredID?.id)
  };
  const getDepartmentCount = async (id: any)=>{
    try {
      const response = await departmentCount(id)
      setCount(response?.data?.approvedCount)
      setTotalCount(response?.data?.approvedCount + response?.data?.pendingCount)
    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    fetchProgram("");
    
  }, [updateprogram, activeDepartment, tabstatus]);
  const fetchProgram = async (value: string) => {
    try {
      const response = await getAllProgramsViaStatus(tabstatus, value);
      const newArray = response?.data?.programs?.filter((item: any)=> item?.department?.id === departmentId)
      setFilteredProgramListing(newArray)
      
      setprogramListing(response?.data?.programs)
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
      progamIds: selectedRows,
      status: selectedOption,
    };
    const response = await updateProgram(data);
    setUpdateprogram(response?.data);
  };

  const handleSumbit = async ()=>{
    let obj = {
      departmentIds: [departmentId],
      status: Status.PENDING
    }
    try {

      await getSingleDepartments(obj)
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
  }

  const receiveProgramSearch = async (value: string) => {
await fetchProgram(value)
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
      <Box className="customSelect">
      <SelectDemo parentClass="departmentSelect"
      title="Department"
      receiveValue={receiveDepartment}
      list={departments}
      value={activeDepartment}
      placeholder="Please Select"
      />
      <Box className="approvedTableBlock">
        <Box className="approvedProgramBlock">
          <ApprovedProgram tabstatus={tabstatus} count={count} totalCount={totalCount} handleClick={()=> handleSumbit()}
          />
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
          checkout={true} 
          receiveProgramSearch={receiveProgramSearch}
          approveTabAcriveClass = {true}
        />
      </Box>
      </Box>
      
      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
    </StyledBox>
  );
};

export default DHReviewBudgets;
