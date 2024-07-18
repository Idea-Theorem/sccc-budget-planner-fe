import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const EmployeeInfoArea = styled(Box)(() => ({
  ".salary-table": {
    width: "100%",
    borderCollapse: "collapse",

    th: {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: "600",
      color: "#303030",
      textAlign: "right",
      paddingBottom: "5px",
      borderBottom: "1px solid #303030",

      "&:first-child": {
        textAlign: "left",
      },
    },

    tbody: {
      tr: {
        "&:only-child": {
          td: {
            paddingBottom: "16px",
          },
        },

        "&:first-child": {
          td: {
            paddingTop: "16px",
          },
        },

        "&:last-child": {
          td: {
            paddingBottom: "16px",
          },
        },

        td: {
          paddingTop: "8px",
          paddingBottom: "8px",
        },
      },
    },

    tfoot: {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#303030",
      fontWeight: "600",

      td: {
        paddingTop: "7px",
        borderTop: "1px solid #303030",
      },
    },

    "th, td": {
      paddingLeft: "4px",
      paddingRight: "4px",
      "&:first-child": {
        paddingLeft: "16px",
        paddingRight: "20px",
      },

      "&:last-child": {
        paddingRight: "60px",
        position: "relative",
        textAlign: "right",
      },
    },

    ".MuiFormControl-root ": {
      width: "100%",
      // maxWidth: "76px",
    },

    ".select-holder ": {
      minWidth: "76px",

      "&.large": {
        minWidth: "242px",
      },
      ".MuiFormControl-root": {
        margin: "0",
        height: "40px",
        border: "1px solid rgba(0,0,0,0.23)",
        borderRadius: "4px",
        padding: "0",

        ".input-wrap": {
          height: "100%",
        },

        ".MuiInputBase-input": {
          height: "100%",
          padding: "0 30px 0 12px",
          display: "flex",
          alignItems: "center",
          textTransform: "capitalize",
        },
      },

      ".MuiInputBase-root": {
        margin: "0",
        width: "100%",
        height: "100%",

        "&:before, &:after": {
          display: "none !important",
        },
      },
    },

    ".add-item, .remove-item": {
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translate(0, -50%)",
      color: "#048071",
      cursor: "pointer",
      width: "24px",

      svg: {
        width: "100%",
        height: "auto",
        display: "block",
      },
    },

    ".remove-item": {
      color: "#303030",
    },
  },
}));
