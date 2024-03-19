import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TabsArea from "../../../components/Tabs";
import SubHeader from "../../../components/SubHeader";
import BackButton from "../../../components/Button/backButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const StyledBox = styled(Box)(() => ({
  "&.appContainer": {
    padding: "40px",
    paddingLeft: "248px",
  },

  "& .budgetTitle": {
    margin: "0 0 10px",
    
    "& .MuiTypography-body1": {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "1.23",
      letterSpacing: "0.25px", 
    },
  },
  // Color: theme.palette.secondary.light,
}));
const DepartmentDetailScreen = () => {
  return (
    <StyledBox className="appContainer">
      <BackButton />
      <SubHeader title="Recreation & Culture" />
      <Stack className="budgetTitle">
        <Typography>Total Budget: $00,000.00</Typography>
      </Stack>
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

export default DepartmentDetailScreen;
