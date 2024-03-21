import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../../components/MainHeader";
import TabsArea from "../../../components/Tabs";
const StyledBox = styled(Box)(() => ({
  "& .dashboardCards": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -12px",
  },
  // Color: theme.palette.secondary.light,
}));
const ReviewBudgetScreen = () => {
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        action={true}
        title="Review Budgets"
        btnTitle="Actions"
      />
      <TabsArea
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Rejected" },
          { title: "Approved" },
          { title: "Drafts" },
          { title: "History" },
        ]}
        tableColumnsTitleArray={[
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
        ]}
      />
    </StyledBox>
  );
};

export default ReviewBudgetScreen;
