// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Modal(theme: Theme) {
  console.log(theme);
  return {
    MuiModal: {
      styleOverrides: {
        root: {},
      },
    },
  };
}
