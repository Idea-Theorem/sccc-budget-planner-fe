// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Table(theme: Theme) {
  console.log(theme);
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            "&:hover": {},
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {},
        head: {
          "&:first-of-type": {},
          "&:last-of-type": {},
        },
        stickyHeader: {},
        body: {
          "&:first-of-type": {},
          "&:last-of-type": {},
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {},
        toolbar: {},
        select: {
          "&:focus": {},
        },
        selectIcon: {},
      },
    },
  };
}
