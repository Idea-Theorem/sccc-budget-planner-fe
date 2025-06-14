import { createTheme, Theme } from "@mui/material/styles";
import {
  commonPalleteColors,
  commonTypography,
  palleteWithExtraColors,
} from "../../theme/common";
import shadows, { customShadows } from "../../theme/shadows.ts";
import { defaultLightTheme } from "../palette";

export const lightPallete: any = {
  mode: "light",
  primary: {
    main: "rgba(42, 157, 143, 1)",
    light: "rgba(42, 157, 143, 1)",

    shades: {
      "4p": "rgba(140, 59, 45, 0.04)",
      "8p": "rgba(140, 59, 45, 0.08)",
      "12p": "rgba(140, 59, 45, 0.12)",
      "30p": "rgba(140, 59, 45, 0.3)",
      "50p": "rgba(140, 59, 45, 0.5)",
    },
  },
  secondary: {
    main: "rgba(231, 111, 81, 1)",
    light: "rgba(231, 111, 81, 1)",
    mainLight: "rgba(231, 111, 81, 1)",

    shades: {
      "4p": "rgba(33, 150, 243, 0.4)",
      "8p": "rgba(10, 140, 164, 0.08)",
      "12p": "rgba(10, 140, 164, 0.12)",
      "30p": "rgba(10, 140, 164, 0.3)",
      "50p": "rgba(10, 140, 164, 0.5)",
    },
  },
  error: {
    main: "rgba(211, 47, 47, 1)",
    light: "rgba(198, 40, 40, 1)",

    shades: {
      "4p": "rgba(211, 47, 175, 0.04)",
      "12p": "rgba(211, 47, 175, 0.12)",
      "30p": "rgba(211, 47, 175, 0.3)",
      "50p": "rgba(211, 47, 175, 0.5)",
      "160p": "rgba(211, 47, 175, 1)",
      "190p": "rgba(211, 47, 175, 1)",
    },
  },

  warning: {
    main: "rgba(239, 108, 0, 1)",
    light: "rgba(198, 40, 40, 1)",

    shades: {
      "4p": "rgba(239, 108, 0, 1)",
      "12p": "rgba(161, 146, 5, 0.12)",
      "30p": "rgba(161, 146, 5, 0.3)",
      "50p": "rgba(161, 146, 5, 0.5)",
      "160p": "rgba(161, 146, 5, 1)",
      "190p": "rgba(161, 146, 5, 1)",
    },
  },
  success: {
    main: "rgba(46, 125, 50, 1)",
    light: "rgba(27, 94, 32, 1)",

    shades: {
      "4p": "rgba(46, 125, 50, 1)",
      "12p": "rgba(18, 166, 25, 0.12)",
      "30p": "rgba(18, 166, 25, 0.3)",
      "50p": "rgba(18, 166, 25, 0.5)",
      "160p": "rgba(18, 166, 25, 1)",
      "190p": "rgba(18, 166, 25, 1)",
    },
  },

  info: {
    main: "rgba(2, 136, 209, 1)",
    light: "rgba(1, 87, 155, 1)",

    shades: {
      "4p": "rgba(2, 136, 209, 1)",
      "12p": "rgba(10, 140, 164, 0.12)",
      "30p": "rgba(10, 140, 164, 0.3)",
      "50p": "rgba(10, 140, 164, 0.5)",
      "160p": "rgba(10, 140, 164, 1)",
      "190p": "rgba(10, 140, 164, 1)",
    },
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.7)",
    disabled: "rgba(152, 152, 152, 1)",
    light: "rgba(113, 122, 126, 1)",
  },

  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(255, 255, 255, 0.08)",
    selected: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 1)",
    focus: "rgba(0, 0, 0, 0.12)",
  },
  background: {
    DarkGray: "rgba(65, 65, 88, 1)",
    lightGray: "rgba(65, 65, 88, 0.8)",
    default: "rgba(255, 255, 255, 1)",
    paper: "rgba(255, 255, 255, 1)",
    GFBackground: "rgba(29, 26, 38, 1)",
    neutral: "rgba(255, 255, 255, 1)",
    GFForeground: "rgba(50, 45, 65, 1)",
    GFPaper: "rgba(37, 34, 48, 1)",
    ContentArea: "rgba(245, 245, 245, 1)",
    LeftNavTop: "rgba(32, 28, 42, 1)",
    LeftNavBody: "rgba(234, 238, 244, 1)",
    GFRightNavBackground: "rgba(234, 238, 244, 1)",
    GFRightNavForeground: "rgba(212, 218, 226, 1)",

    GFSearch: "rgba(52, 52, 57, 1)",
    GFOverlay: "rgba(50, 46, 61, 1)",
    GFOutlineNav: "rgba(41, 41, 46, 1)",
    GFCardOutline: "rgba(87, 87, 91, 1)",
    GFCardBG: "rgba(30, 30, 35, 0.4)",
    GF36: "rgba(0, 0, 0, 0.36)",
    GFTopNav: "rgba(30, 30, 30, 1)",
    AvatarOutline: "rgba(90, 90, 96, 1)",
    GF80: "rgba(0, 0, 0, 0.8)",
    GF70: "rgba(255, 255, 255, 0.7)",
    GF60: "rgba(0, 0, 0, 0.6)",
    GF50: "rgba(0, 0, 0, 0.5)",
    GF40: "rgba(255, 255, 255, 0.4)",
    GF20: "rgba(255, 255, 255, 0.2)",
    GF7: "rgba(255, 255, 255, 0.07)",
    GF5: "rgba(255, 255, 255, 0.05)",
    GF10: "rgba(255, 255, 255, 0.1)",
    Groups: "rgba(97, 97, 101, 1)",
    Setting: "rgba(64, 64, 69, 1)",
    LinearGF: "rgba(29,29,35,1)",
    Dashboard: "rgba(29,26,38,1)",

    TableBG: "rgba(31,31,38,1)",
    TableCustomBG: "rgba(89, 89, 95, 1)",
    CardsCustomBG: "rgba(0, 0, 0, 0.1)",
    SubNavHoverBG: "rgba(212, 218, 226, 0.8)",
    presentationActive: "rgba(212, 218, 226, 0.8)",
    cardsBorder: "rgba(212, 218, 226, 1)",
    cardsBG: "rgba(212, 218, 226, 0.2)",
  },
  common: {
    blackshades: {
      "4p": "rgba(0, 0, 0, 0.87)",
      "12p": "rgba(0, 0, 0, 0.6)",
      "30p": "rgba(0, 0, 0, 0.3)",
      "100p": "rgba(0, 0, 0, 1)",
    },
    whiteshades: {
      "8p": "rgba(255, 255, 255, 0.08)",
      "12p": "rgba(255, 255, 255, 0.12)",
      "30p": "rgba(255, 255, 255, 0.3)",
      "100p": "rgba(255, 255, 255, 1)",
    },
  },

  other: {
    divider: "rgba(0, 0, 0, 0.12)",
    outlinedBorder: "rgba(0, 0, 0, 0.23)",
    filledInputBackground: "rgba(0, 0, 0, 0.06)",
    standardInputLine: "rgba(0, 0, 0, 0.42)",
    snackbar: "rgba(50, 50, 50, 1)",
    ratingActive: "rgba(255, 180, 0, 1)",
    focusRingColor: "rgba(0, 95, 204, 1)",
    backdropOverlay: "rgba(0, 0, 0, 0.5)",
  },
  gfGrey: {
    ...palleteWithExtraColors.gfGrey,
    textGray: "#989898",
    GF50: "rgba(0, 0, 0, 0.6)",
    GF75: "rgba(0, 0, 0, 0.6)",
    GF100: "rgba(217, 219, 223, 1)",
    AvatarOutline: "rgba(90, 90, 96, 1)",
    "GF60%": "rgba(160, 160, 160, 1)",
    "GF40%": "rgba(113, 113, 118, 1)",
    Groups: "rgba(97, 97, 101, 1)",
    "GF50%": "rgba(136, 136, 136, 1)",
    "GF15%": "rgba(255, 255, 255, 0.15)",
    GFBoxer: "rgba(45, 45, 51, 1)",
  },
  deepPurple: {
    ...palleteWithExtraColors.deepPurple,
    GFLightPurple: "rgba(44, 23, 66, 1)",
    GFPurple: "rgba(89, 46, 132, 1)",
  },
  lightGreen: {
    ...palleteWithExtraColors.lightGreen,
    GFGreen: "rgba(124, 169, 53, 1)",
    GFShocking: "rgba(16, 249, 95, 1)",
    GFGreenLight: "rgba(68, 86, 42, 1)",
  },
  orange: {
    ...palleteWithExtraColors.orange,
    GFOrange: "rgba(255, 193, 7, 1)",
    GFOrangeLight: "rgba(92, 55, 27, 1)",
    GFOrangeBright: "rgba(187, 114, 34, 1)",
    Status: "rgba(255, 145, 0, 1)",
  },
  green: {
    ...palleteWithExtraColors.green,
    GFGreen: "rgba(124, 169, 53, 1)",
    GFGreenLight: "rgba(68, 86, 42, 1)",
    GFShocking: "rgba(16, 249, 95, 1)",
  },
  yellow: {
    ...palleteWithExtraColors.yellow,
    GFYellow: "rgba(182, 142, 5, 1)",
    GFYellowLight: "rgba(91, 75, 23, 1)",
  },
  blue: {
    ...palleteWithExtraColors.blue,
    GFBlue: "rgba(56, 54, 133, 1)",
    GFBlueLight: "rgba(40, 40, 74, 1)",
    Dropbox: "rgba(0, 97, 255, 1)",
    LightBlue: "rgba(79, 195, 247, 1)",
    GFDarkBlue: "rgba(41, 112, 139, 1)",
  },
  cyan: {
    ...palleteWithExtraColors.cyan,
    Fusion: "rgba(0, 184, 212, 1)",
  },
  red: {
    ...palleteWithExtraColors.red,
    GFRed: "rgba(216, 27, 96, 1)",
    Error: "rgba(255, 23, 68, 1)",
  },
  purple: {
    ...palleteWithExtraColors.purple,
    GFPurple: "rgba(156, 39, 176, 1)",
    GFPurpleLight: "rgba(44, 23, 66, 1)",
  },
  ...commonPalleteColors,
};

export const lightTheme: Theme = createTheme({
  palette: lightPallete,
  shadows: shadows.light as typeof defaultLightTheme.shadows,
  typography: {
    fontRaboto: "Roboto",
    ...commonTypography,
  } as any,
  customShadows: customShadows.light,
}) as Theme;
