import { createTheme } from "@mui/material/styles";

import { lightTheme } from "./light";

export const defualtTheme = (mode: "dark" | "light" = "dark") =>
  createTheme({
    // spacing: (factor: number) => `${0.25 * factor}rem`,
    palette: {
      mode,
    },
  });

export const defaultLightTheme = defualtTheme("light");

const AppThemes: Record<string, typeof defaultLightTheme> = {
  light: lightTheme,
};

export default AppThemes;
