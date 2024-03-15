// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Slider(theme: Theme) {
  console.log(theme);
  return {
    MuiSlider: {
      defaultProps: {},

      styleOverrides: {
        root: {
          "&.Mui-disabled": {},
          '.MuiSlider-track': {
            height: '6px',
          },

          '&.MuiSlider-vertical ': {
            '.MuiSlider-track': {
              width: '6px'
            }
          },
        },
        markLabel: {},
        valueLabel: {},
      },
    },
  };
}
