import { ReactNode } from "react";
// @mui

import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import type {} from "@mui/x-date-pickers/themeAugmentation";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import useThemeToggle from "../hooks/useThemeToggle";
import { CssBaseline } from "@mui/material";

// ----------------------------------------------------------------------
// const theme = {
//   // Add your theme configuration here
//   themeMode: "light",
//   themeDirection: "ltr",
// };
type IThemeProvider = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: IThemeProvider) {
  const theme = useThemeToggle({
    themeDirection: "ltr",
    themeMode: "light",
  });
  // console.log("theme", theme);
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          {children}
        </LocalizationProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
