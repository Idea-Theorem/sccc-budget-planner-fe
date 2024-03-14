// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Skeleton(theme: Theme) {
  console.log(theme);
  return {
    MuiSkeleton: {
      defaultProps: {},

      styleOverrides: {
        root: {},
      },
    },
  };
}
