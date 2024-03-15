// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Timeline(theme: Theme) {
  console.log(theme);
  return {
    MuiTimelineDot: {
      styleOverrides: {
        root: {},
      },
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: {},
      },
    },
  };
}
