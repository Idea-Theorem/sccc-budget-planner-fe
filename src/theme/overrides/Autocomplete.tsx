// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Autocomplete(theme: Theme) {
  console.log(theme);
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {},
        listbox: {
          "& .MuiAutocomplete-option": {},
        },
      },
      defaultProps: {
        ChipProps: {
          size: "small"
        }
      },
    },
  };
}
