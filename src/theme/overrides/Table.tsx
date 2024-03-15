// Table.js (or your override file)
import { Theme } from "@mui/material/styles";

export default function Table(theme: Theme) {
  console.log(theme);
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "rgba(42, 157, 143, 1)", // Change the color here
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          // Example: Add different background color for selected rows
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          // Add your cell styles here
          background: "#f00",
        },
        head: {
          // Add your header cell styles here
        },
        body: {
          // Add your body cell styles here
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          // Add your table pagination root styles here
        },
        toolbar: {
          // Add your table pagination toolbar styles here
        },
        select: {
          // Add your table pagination select styles here
        },
        selectIcon: {
          // Add your table pagination select icon styles here
        },
      },
    },
  };
}
