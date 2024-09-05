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

type IThemeProvider = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: IThemeProvider) {
  const theme = useThemeToggle({
    themeDirection: "ltr",
    themeMode: "light",
  });
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
