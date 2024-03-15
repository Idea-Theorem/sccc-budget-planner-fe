import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function PickersDay(theme: Theme) {
  console.log(theme);
  return {
    MuiPickersDay: {
      defaultProps: {},

      styleOverrides: {
        root: {
          background: "none",
        },
      },
    },
  };
}
