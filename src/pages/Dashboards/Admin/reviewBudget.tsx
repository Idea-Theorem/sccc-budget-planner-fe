import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../../components/MainHeader";
import TabsArea from "../../../components/Tabs";
const StyledBox = styled(Box)(() => ({
  "&.appContainer": {
    padding: "40px",
    paddingLeft: "248px",
  },

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
        // action={true}
        title="Review Budgets"
        btnTitle="Actions"
      />
      <TabsArea />
    </StyledBox>
  );
};

export default ReviewBudgetScreen;
