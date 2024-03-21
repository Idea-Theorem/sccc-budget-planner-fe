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
      />
    </StyledBox>
  );
};

export default ReviewBudgetScreen;
