import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MainHeaderComponent from "../../../components/MainHeader";
import TabsArea from "../../../components/Tabs";
const StyledBox = styled(Box)(() => ({
  "&.appContainer": {

    ".appHeader": {
      paddingBottom: "13px",
    },
  },
}));
const PHProgramsScreen = () => {
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent title="Programs" btnTitle="Create New Programs" />
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

export default PHProgramsScreen;
