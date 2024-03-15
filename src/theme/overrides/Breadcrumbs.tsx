// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Breadcrumbs(theme: Theme) {
  console.log(theme);
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
        },
      },
    },
  };
}
