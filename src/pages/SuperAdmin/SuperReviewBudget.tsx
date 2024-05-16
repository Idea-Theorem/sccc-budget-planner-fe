import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../components/MainHeader";
import TabsArea from "../../components/Tabs";
import { getAllCenters, getDepartmentInCenters, getProgramInDepartment } from "../../services/centersServices";
import { useEffect, useState } from "react";
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

  const [center, setCenters] = useState([])
  const [currenttitle, setCurrentTitle] = useState("")
  const [step, setStep] = useState(0)
  const tableColumnsTitleArray = [
    [
      {
        field: "name",
        headerName: step == 0 ? "Center Name" : step == 1 ? "Department Name" : "Program Name",
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
        field: "created_at",
        headerName: "Created At",
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
        field: "created_at",
        headerName: "Created At",
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
        field: "created_at",
        headerName: "Created At",
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
    {text: "Approve"},
    {text: "Reject"},
  ]

  const fetchCenter = async () => {
    try {
      const response = await getAllCenters()
      setCenters(response?.data?.centers)
    } catch (error) {
      
    }
  }
  const handleSingleRow = async (row: any) => {
    if(step == 1){
      fetchProgramInDepartment(row.id)
      setCurrentTitle(row.name)
      setStep(2)
      return
    }
    setCurrentTitle(row.name)
    try {
      const res = await getDepartmentInCenters(row?.id)
      setCenters(res?.data?.center)
      setStep(1)
    } catch (error) {
      
    }
  }

  const fetchProgramInDepartment = async (id: string) => {
try {
  const res = await getProgramInDepartment(id)
  setCenters(res?.data?.departments
  )
} catch (error) {
  
}
  }
  useEffect(() => {
    fetchCenter()
  }, [])

  const handleBackFunctionality = () => {
    fetchCenter()
    setStep(0)
  }
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        array={array}
        action={true} 
        title={step == 0 ? "Review Budgets Center" : step == 1 ? "Review Budgets Center  >  Departments" : step == 2 ? "Review Budgets Center  >  Departments > Program":""}
        subdes={currenttitle}
        btnTitle="Actions"
        subHeader={true}
        subTitle="Total Budget: $00,000.00"
        onClick={handleBackFunctionality}
      />
      <TabsArea
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Rejected" },
          { title: "Approved" },
          { title: "Drafts" },
          { title: "History" },
        ]}
        table={tableColumnsTitleArray}
        row={center}
        onRowClick={handleSingleRow}
      />
    </StyledBox> 
  );
};

export default SuperReviewBudget;
