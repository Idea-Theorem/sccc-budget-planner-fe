import { Theme } from "@mui/material/styles";

export default function TreeView(theme: Theme) {
  console.log(theme);
  return {
    MuiTreeView: {
      defaultProps: {},
    },
    MuiTreeItem: {
      styleOverrides: {
        label: {},
        iconContainer: {},
      },
    },
  };
}
