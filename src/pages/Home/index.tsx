import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Buttons from "../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "../Components/MUIComponents/index";
import BackButton from "../../components/Button/backButton";
import SelectDemo from "../../components/Select";
import BasicDatePicker from "../../components/DatePicker";
import { useState } from "react";
import TabsProgramArea from "../../components/TabsProgram";
import TabsArea from "../../components/Tabs";
import { EditNote, Save } from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  Color: theme.palette.secondary.light,
}));

const DateTypography = styled(Typography)({
  fontSize: "10px", // Change this to the font size you want
});

const DateStack = styled(Stack)({
  backgroundColor: "whiteSmoke", // Change this to the font size you want
  borderRight: "3px solid green",
  padding: "15px",
});

const HomeScreen = () => {
  const [firstLevel, setFirstLevel] = useState(false);

  const [secondLevel, setSecondLevel] = useState(false);

  return (
    <>
      {!firstLevel ? (
        <StyledBox sx={{ paddingLeft: "250px" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Typography variant="h3">Programs</Typography>
            <Buttons
              startIcon={<AddIcon />}
              btntext3="Create New Program"
              onClick={() => setFirstLevel(true)}
            />
          </Stack>
          <TabsArea />
        </StyledBox>
      ) : null}
      {firstLevel && !secondLevel ? (
        <StyledBox sx={{ paddingLeft: "250px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BackButton onClick={() => setFirstLevel(false)} />
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
                    startIcon={<EditNote />}
                    btntext3="Revise"
                    onClick={() => setSecondLevel(true)}
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
      ) : null}
      {secondLevel ? (
        <StyledBox sx={{ paddingLeft: "250px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BackButton onClick={() => setSecondLevel(false)} />
            </Grid>
            <Grid item xs={3}>
              <DateStack
                direction={"column"}
                justifyContent={"end"}
                alignItems={"end"}
              >
                <DateTypography variant="h5">2-March</DateTypography>
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
                  <Typography variant="h5">Youth Swimming Class2</Typography>
                  <Stack direction={"row"} gap={"20px"}>
                    <Buttons startIcon={<Save />} btntext1="Save" />
                    <Buttons startIcon={<EditNote />} btntext3="ReSubmit" />
                  </Stack>
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
      ) : null}
    </>
  );
};

export default HomeScreen;
