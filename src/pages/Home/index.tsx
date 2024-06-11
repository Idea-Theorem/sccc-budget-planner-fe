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
import { EditNote } from "@mui/icons-material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import {
  storeProgramFromStatus,
  storeSingleProgram,
} from "../../store/reducers/programSlice";
import Status from "../../utils/dumpData";
import { useDispatch } from "react-redux";

const StyledBox = styled(Box)(({ theme }) => ({
  "&.appContainer": {
    "&.bgGray": {
      background: "#fafafa",
      margin: "-32px -40px",
      padding: "32px 40px",
    },
  },

  ".datepicker-area": {
    position: "relative",

    "&:before": {
      position: "absolute",
      content: "''",
      width: "13px",
      height: "2px",
      background: "rgba(0, 0, 0, 0.87)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
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
    marginBottom: "28px",
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
        lineHeight: "1.2",
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

      "& .MuiSelect-select": {
        fontFamily: "Work Sans !important",
      },

      "& .MuiSelect-nativeInput": {
        fontFamily: "Work Sans  !important",
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
      marginBottom: "24px !important",
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
  marginRight: "5px",
  letterSpacing: "0.3px",

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
  const dispatch = useDispatch();
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
  return (
    <>
      {!firstLevel ? (
        <StyledBox className="appContainer">
          <Box className="appHeader">
            <Stack className="appHeaderHolder">
              <Typography variant="h3">Programs</Typography>
              <Buttons
                startIcon={<AddIcon />}
                btntext="Create New Program"
                onClick={() => {
                  setFirstLevel(true);
                  dispatch(storeSingleProgram(null));
                  dispatch(storeProgramFromStatus(Status.CREATED));
                }}
              />
            </Stack>
          </Box>
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
                      btntext="Revise"
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
                    <Typography className="mainHeading" variant="h5">
                      Youth Swimming Class2
                    </Typography>
                    <Stack direction={"row"} gap={"20px"}>
                      <Buttons startIcon={<SaveOutlinedIcon />} btntext="Save" />
                      <Buttons startIcon={<EditNote />} btntext="ReSubmit" />
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
