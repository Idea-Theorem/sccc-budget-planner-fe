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
  "&.appContainer": {
    "&.bgGray": {
      background: "#fafafa",
    },
  },

  "& .appHeader": {
    width: "100%",
    paddingBottom: "20px",

    "& .appHeaderHolder": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },

    "& .MuiTypography-h3": {
      fontSize: "26px",
      lineHeight: "1.3",
      color: theme.palette.common.blackshades["4p"],
    },

    "& .MuiButton-containedSuccess": {
      textTransform: "capitalize",
      fontWeight: "500",
      fontFamily: "Work Sans",
      padding: "7px 15px",

      "& .MuiButton-startIcon": {
        marginRight: "5px",
      },
    },
  },

  "& .appBackHeader": {
    paddingTop: "0",
  },

  "& .createProgramContent": {
    background: theme.palette.background.default,
    padding: "46px 42px",
  },

  "& .createProgram": {
    background: theme.palette.background.default,
    padding: "30px 42px",
  },

  "& .createProgramContentHead": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0 0 31px",

    "& .mainHeading": {
      color: theme.palette.common.blackshades["4p"],
      fontFamily: "Work Sans",
      fontSize: "22px",
      fontWeight: "500",
      lineHeight: "1.3",
      letterSpacing: "0.25px",
    },

    "& .MuiButton-root": {
      minWidth: "102px",
      height: "36px",
      fontFamily: "Work Sans",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0.4px",
      textTransform: "capitalize",
    },
  },

  "& .createFormBlock": {
    width: "100%",
    marginBottom: "30px",
    paddingTop: "10px",
  },

  "& .createFormFields": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0 -10px 13px",

    "& .MuiFormControl-root": {
      width: "50%",
      padding: "0 10px",
      margin: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      border: "0",

      "& .MuiInputLabel-formControl": {
        color: "#000",
        fontFamily: "Work Sans",
        fontSize: "16px",
        fontWeight: "500",
        flexShrink: "0",
        margin: "0 20px 0 0",
        minWidth: "120px",
      },

      "& .MuiInput-underline": {
        flexGrow: "1",
        minWidth: "0",
        margin: "0",
      },
    },
  },

  "& .createFormCalendarFields": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0 -10px",

    "& .MuiTypography-h5": {
      color: "#000",
      fontFamily: "Work Sans",
      fontSize: "16px",
      fontWeight: "500",
      flexShrink: "0",
      margin: "0 10px",
      minWidth: "120px",
    },

    "& .MuiBox-root": {
      flexGrow: "1",
      minWidth: "0",
      padding: "0 10px",
      margin: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      border: "0",

      "& .MuiTextField-root": {
        width: "100%",

        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "0",
          borderTop: "0",
          borderLeft: "0",
          borderRight: "0",
        },
      },

      "& .MuiOutlinedInput-input": {
        paddingTop: "4px",
        paddingLeft: "0",
        paddingBottom: "5px",
      },
    },
  },

  "& .createFormTable": {
    width: "100%",

    "& .MuiTabs-scroller": {
      marginBottom: "30px !important",
    },

    "& .MuiTabs-flexContainer": {
      width: "100%",

      "& .MuiTab-root": {
        flexGrow: "1",
        textTransform: "capitalize",
        fontWeight: "500",
        letterSpacing: "0.4px",
        maxWidth: "100%",
      },
    },
  },
  // Color: theme.palette.secondary.light,
}));

const DateTypography = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.action.selected,
  fontFamily: "Work Sans",
  fontWeight: "500",
}));

const DateStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRight: "3px solid #fff",
  padding: "12px 15px",

  "&.selected": {
    borderRightColor: theme.palette.primary.main,

    "& .MuiTypography-h5": {
      color: theme.palette.primary.main,
    },
  },
}));

const HomeScreen = () => {
  const [firstLevel, setFirstLevel] = useState(false);

  const [secondLevel, setSecondLevel] = useState(false);

  return (
    <>
      {!firstLevel ? (
        <StyledBox className="appContainer">
          <Box className="appHeader">
            <Stack className="appHeaderHolder">
              <Typography variant="h3">Programs</Typography>
              <Buttons
                startIcon={<AddIcon />}
                btntext3="Create New Program"
                onClick={() => setFirstLevel(true)}
              />
            </Stack>
          </Box>
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
      ) : null}
      {firstLevel && !secondLevel ? (
        <StyledBox className="appContainer bgGray">
          <Grid container spacing={2}>
            <Grid className="appBackHeader" item xs={12}>
              <BackButton onClick={() => setFirstLevel(false)} />
            </Grid>
            <Grid item xs={3}>
              <DateStack
                className="selected"
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <DateTypography variant="h5">2-Mar</DateTypography>
              </DateStack>
            </Grid>
            <Grid item xs={9}>
              <Grid className="createProgram" item xs={12}>
                <Grid item xs={12}>
                  <Stack
                    className="createProgramContentHead"
                    direction="row"
                    alignItems="center"
                  >
                    <Typography className="mainHeading" variant="h5">
                      Youth Swimming Class1
                    </Typography>
                    <Buttons
                      startIcon={<EditNote />}
                      btntext3="Revise"
                      onClick={() => setSecondLevel(true)}
                    />
                  </Stack>
                </Grid>
                <Grid className="createFormBlock" item xs={10}>
                  <Stack className="createFormFields">
                    <SelectDemo />
                    <SelectDemo />
                  </Stack>
                  <Stack className="createFormCalendarFields">
                    <Typography variant="h5">Duration</Typography>
                    <BasicDatePicker />
                    <BasicDatePicker />
                  </Stack>
                </Grid>
                <Grid className="createFormTable" item xs={12}>
                  <TabsProgramArea />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledBox>
      ) : null}
      {secondLevel ? (
        <StyledBox className="appContainer bgGray">
          <Grid container spacing={2}>
            <Grid className="appBackHeader" item xs={12}>
              <BackButton onClick={() => setSecondLevel(false)} />
            </Grid>
            <Grid item xs={3}>
              <DateStack
                className="selected"
                direction={"column"}
                justifyContent={"end"}
                alignItems={"end"}
              >
                <DateTypography variant="h5">Revise 1 (4-Mar)</DateTypography>
              </DateStack>
              <DateStack
                direction={"column"}
                justifyContent={"end"}
                alignItems={"end"}
              >
                <DateTypography variant="h5">2-Mar</DateTypography>
              </DateStack>
            </Grid>
            <Grid item xs={9}>
              <Grid className="createProgramContent" item xs={12}>
                <Grid item xs={12}>
                  <Stack className="createProgramContentHead">
                    <Typography variant="h5">Youth Swimming Class2</Typography>
                    <Stack direction={"row"} gap={"20px"}>
                      <Buttons startIcon={<Save />} btntext1="Save" />
                      <Buttons startIcon={<EditNote />} btntext3="ReSubmit" />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid className="createFormBlock" item xs={10}>
                  <Stack className="createFormFields">
                    <SelectDemo />
                    <SelectDemo />
                  </Stack>
                  <Stack className="createFormCalendarFields">
                    <Typography variant="h5">Duration</Typography>
                    <BasicDatePicker />
                    <BasicDatePicker />
                  </Stack>
                </Grid>
                <Grid className="createFormTable" item xs={12}>
                  <TabsProgramArea />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledBox>
      ) : null}
    </>
  );
};

export default HomeScreen;
