// import { InputSelectIcon } from "./CustomIcons";

// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";
export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        // IconComponent: InputSelectIcon,
      },
      styleOverrides: {
        root: {
          boxshadow:
          "0px 1.85px 6.25px 0px rgba(0, 0, 0, 0.19), 0px 0.5px 1.75px 0px rgba(0, 0, 0, 0.04)",
          "&.MuiInputBase-sizeSmall": {
            minHeight: "40px",

            ".MuiSelect-filled": {
              paddingTop: "4px",
            },
          },

          ".MuiInputBase-inputSizeSmall": {},

          "&:before, &:after": {
            display: "none !important",
          },

          "&:hover": {
            // background: theme.palette.background.GF5,
            // border: "none",
          },
          "&.Mui-focused": {
            // background: theme.palette.background.GF5,
            // border: "none",
          },
          "&.Mui-disabled": {},
        },
        underline: {
          "&:before": {},
        },
      },
    },

    MuiMenuItem: {
      root: {
        // Add your styles for MenuItem here
        backgroundColor: "lightblue",
        color: "darkblue",
        "&:hover": {
          backgroundColor: "blue",
          color: "white",
        },
      },
    },
  };
}
