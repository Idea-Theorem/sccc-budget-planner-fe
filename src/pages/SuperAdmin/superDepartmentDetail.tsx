import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../components/Tabs";
import MainHeaderComponent from "../../components/MainHeader";
import BreadCrumbs from "../../components/BreadCrumbs";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  ".appHeader": {
    paddingBottom: "5px !important",
  },
}));
const SuperDepartmentDetail = () => {
  const tableColumnsTitleArray = [
    [
      {
        field: "departmentName",
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
        field: "budget",
        headerName: "Budget",
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
        field: "departmentName",
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
        field: "budget",
        headerName: "Budget",
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
        field: "departmentName",
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
        field: "budget",
        headerName: "Budget",
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
  const array = [{ text: "Approve" }, { text: "Reject" }];
  return (
    <StyledBox className="appContainer">
      <BreadCrumbs linkText="Review Budgets Centre" subText="Departments" />
      <MainHeaderComponent
        classname="main-header"
        array={array}
        action={true}
        title="SCCC"
        btnTitle="Actions"
        subdes="Total Budget: $00,000.00"
      />
      <TabsArea
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Rejected" },
          { title: "Approved" },
          { title: "Drafts" },
          // { title: "History" },
        ]}
        table={tableColumnsTitleArray}
      />
    </StyledBox>
  );
};

export default SuperDepartmentDetail;
