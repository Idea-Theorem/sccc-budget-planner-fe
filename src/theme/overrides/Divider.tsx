import { Theme } from '@mui/material/styles';
// ----------------------------------------------------------------------

export default function Drawer(theme: Theme) {
  console.log(theme);
  return {
    MuiDivider: {
      styleOverrides: {
        modal: {},
      },
    },
  };
}
