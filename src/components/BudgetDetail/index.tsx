import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { Grid } from "../../pages/Components/MUIComponents/index";
import { BudgetDetailProps } from "../../types/common";
import Back from "./Back";
import LeftSection from "./LeftSection";
import MainSection from "./MainSection";

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

  ".MuiTypography-h5": {
    color: theme.palette.common.blackshades["4p"],
  },

  ".btn-back": {
    margin: "0 0 1px 7px",
  },

  "& .appBackHeader": {
    marginTop: "-3px",
  },

  "& .createProgramContent": {
    background: theme.palette.background.default,
    padding: "32px 43px 28px 41px",
  },

  "& .createProgramContentHead": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0 0 29px",

    "& .mainHeading": {
      color: theme.palette.common.blackshades["4p"],
      fontFamily: "Work Sans",
      fontSize: "22px",
      fontWeight: "500",
      lineHeight: "1.2",
      letterSpacing: "0.25px",
    },

    "& .MuiButton-root": {
      minWidth: "90px",
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
        margin: "0 15px 0 0",
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
        fontWeight: "600",
        letterSpacing: "0.4px",
        maxWidth: "100%",
        color: theme.palette.common.blackshades["12p"],

        "&.Mui-selected": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
}));

const BudgetDetail: FC<BudgetDetailProps> = ({ actions, clickBack }) => {
  return (
    <StyledBox className="appContainer bgGray">
      <Grid container spacing={2}>
        <Back onClick={clickBack} />
        <LeftSection />
        <MainSection actions={actions} />
      </Grid>
    </StyledBox>
  );
};

export default BudgetDetail;
