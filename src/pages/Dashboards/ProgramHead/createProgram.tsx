import { EditNote, Save } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BudgetDetail from "../../../components/BudgetDetail";
import BackButton from "../../../components/Button/backButton";
import BasicDatePicker from "../../../components/DatePicker";
import SelectDemo from "../../../components/Select";
import TabsProgramArea from "../../../components/TabsProgram";
import { ActionsType } from "../../../types/common";
import { Grid } from "../../Components/MUIComponents/index";

const StyledBox = styled(Box)(({ theme }) => ({
  "&.appContainer": {
    "&.bgGray": {
      background: "#fafafa",
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

  ".MuiTypography-h5": {
    color: theme.palette.common.blackshades["4p"],
  },

  ".btn-back": {
    margin: "0 0 1px 7px",
  },

  "& .appBackHeader": {
    marginTop: "-16px",
  },

  "& .createProgramContent": {
    background: theme.palette.background.default,
    padding: "30px 43px 28px 41px",
  },

  "& .createProgramContentHead": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0 0 20px",

    "& .mainHeading": {
      color: theme.palette.common.blackshades["4p"],
      fontFamily: "Work Sans",
      fontSize: "22px",
      fontWeight: "500",
      lineHeight: "123.5%",
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
    with: "100%",
    marginBottom: "30px",
  },

  "& .createFormFields": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0 -10px 25px",

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

const CreateProgramScreen = () => {
  const [firstLevel] = useState(true);

  const [secondLevel, setSecondLevel] = useState(false);

  const navigate = useNavigate()

  const actions: ActionsType[] = [
    {
      title: "Revise",
      icon: <EditNote />,
      variant: "contained",
      color: "primary",
      size: "medium",
      onClick: () => setSecondLevel(true),
    },
  ];

  return (
    <>
      {firstLevel && !secondLevel ? (
        <BudgetDetail
          actions={actions}
          clickBack={() => navigate("/program-head")}
        />
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
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        startIcon={<Save />}
                        onClick={() => navigate("/program-head/program")}
                      >
                        Save
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        startIcon={<EditNote />}
                      >
                        ReSubmit
                      </Button>
                      {/* <Buttons startIcon={<Save />} btntext1="Save" />
                      <Buttons startIcon={<EditNote />} btntext3="ReSubmit" /> */}
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

export default CreateProgramScreen;
