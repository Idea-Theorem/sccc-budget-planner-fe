// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Avatar(theme: Theme) {
  console.log(theme);
  return {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          "&:first-of-type": {
          },
        },
      },
    },
  };
}
