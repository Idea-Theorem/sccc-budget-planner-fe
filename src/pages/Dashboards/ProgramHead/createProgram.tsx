import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Buttons from "../../../components/Button";
import { Grid } from "../../Components/MUIComponents/index";
import BackButton from "../../../components/Button/backButton";
import SelectDemo from "../../../components/Select";
import BasicDatePicker from "../../../components/DatePicker";
import TabsProgramArea from "../../../components/TabsProgram";
import { Save } from "@mui/icons-material";
const StyledBox = styled(Box)(() => ({
  "&.appContainer": {
    padding: "40px",
    paddingLeft: "248px",
  },
  // Color: theme.palette.secondary.light,
}));
const DateTypography = styled(Typography)({
  fontSize: "10px", // Change this to the font size you want
});

const DateStack = styled(Stack)({
  backgroundColor: "whiteSmoke", // Change this to the font size you want
  borderRight: "3px solid green",
  padding: "15px",
});
const CreateProgramScreen = () => {
  return (
    <StyledBox className="appContainer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BackButton />
        </Grid>
        <Grid item xs={3}>
          <DateStack
            direction={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <DateTypography variant="h5">2-March</DateTypography>
          </DateStack>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h5">Youth Swimming Class1</Typography>
              <Buttons
                startIcon={<Save />}
                btntext3="Create"
                // onClick={() => setSecondLevel(true)}
              />
            </Stack>
          </Grid>
          <Grid item xs={8} spacing={6}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"20px"}
            >
              <SelectDemo />
              <SelectDemo />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Typography variant="h5">Duration</Typography>
              <BasicDatePicker />
              <BasicDatePicker />
            </Stack>
          </Grid>
          <TabsProgramArea />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default CreateProgramScreen;
