// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Typography(theme: Theme) {
  console.log(theme)
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {},
        gutterBottom: {},
        article: {},
      },
    },
  };
}
