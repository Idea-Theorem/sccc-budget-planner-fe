// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Menu(theme: Theme) {
  console.log(theme);
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            "&:hover": {},
          },
        },
      },
    },
  };
}
