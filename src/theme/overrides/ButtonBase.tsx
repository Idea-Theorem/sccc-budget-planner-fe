// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function ButtonBase(theme: Theme) {
  console.log(theme);
  return {
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
      },
    },
  };
}
