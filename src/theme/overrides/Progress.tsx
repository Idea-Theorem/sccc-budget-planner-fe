// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Progress(theme: Theme) {
  console.log(theme);
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {},
        bar: {},
        colorPrimary: {},
        buffer: {},
      },
    },
  };
}
