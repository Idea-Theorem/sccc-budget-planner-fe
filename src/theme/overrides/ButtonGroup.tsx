// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function ButtonGroup(theme: Theme) {
  console.log(theme)
  return {
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          "&:hover": {},
        },
      },
    },
  };
}
