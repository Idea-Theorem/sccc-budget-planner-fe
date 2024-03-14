import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Backdrop(theme: Theme) {
  console.log(theme);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          '&.MuiBackdrop-invisible': {},
        },
      },
    },
  };
}
