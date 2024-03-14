// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Paper(theme: Theme) {
  console.log(theme);
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      variants: [
        {
          props: {},
          style: {},
        },
      ],

      styleOverrides: {
        root: {},
      },
    },
  };
}
