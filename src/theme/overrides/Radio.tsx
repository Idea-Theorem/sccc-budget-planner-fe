// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Radio(theme: Theme) {
  console.log(theme);
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          svg: {
            "&[font-size=small]": {},
          },
        },
      },
    },
  };
}
