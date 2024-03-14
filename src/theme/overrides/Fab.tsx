// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Fab(theme: Theme) {
  console.log(theme);
  return {
    MuiFab: {
      defaultProps: {},

      styleOverrides: {
        root: {
          "&:hover": {},
        },
        primary: {
          "&:hover": {},
        },
        secondary: {
          "&:hover": {},
        },
        extended: {
          "& svg": {},
        },
      },
    },
  };
}
