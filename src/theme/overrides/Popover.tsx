// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Popover(theme: Theme) {
  console.log(theme);
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {},
      },
    },
  };
}
