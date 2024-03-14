import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function AlertTitle(theme: Theme) {
  console.log(theme);
  return {
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          // ...theme.typography.alertTitle,
        },
      },
    },
  };
}
