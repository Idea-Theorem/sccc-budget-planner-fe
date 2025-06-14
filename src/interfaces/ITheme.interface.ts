import { Color } from "@mui/material";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { CustomShadowType } from "../theme/shadows";
type ExtraTypography = {
  buttonLarge: React.CSSProperties;
  avatarInitials: React.CSSProperties;
  buttonMedium: React.CSSProperties;
  buttonSmall: React.CSSProperties;
  inputLabel: React.CSSProperties;
  helperText: React.CSSProperties;
  inputText: React.CSSProperties;
  chip: React.CSSProperties;
  tooltip: React.CSSProperties;
  tableHeader: React.CSSProperties;
  menuItem: React.CSSProperties;
  menuItemDense: React.CSSProperties;
  listSubheader: React.CSSProperties;
  bottomNavigationActiveLabel: React.CSSProperties;
};
type CommonColorShades = {
  "4p": string;
  "8p": string;
  "12p": string;
  "30p": string;
  "100p": string;
};
type ColorShades = {
  "4p"?: string;
  "8p"?: string;
  "12p": string;
  "16p"?: string;
  "30p": string;
  "50p": string;
  "160p"?: string;
  "190p"?: string;
};
type TextTypeShades = {
  "4p": string;
  "8p": string;
  "12p": string;
  "18p": string;
  "30p": string;
  "50p": string;
};
type OtherPaletteProperties = {
  divider: string;
  outlinedBorder: string;
  filledInputBackground: string;
  standardInputLine: string;
  snackbar: string;
  ratingActive: string;
  focusRingColor: string;
  backdropOverlay?: string;
};
declare module "@mui/material/styles" {
  interface Theme {
    customShadows: CustomShadowType;
  }
  interface TypographyVariants {
    muted: React.CSSProperties;
    article: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    muted?: React.CSSProperties;
    article?: React.CSSProperties;
  }
  interface TypeBackground {
    DarkGray: TypeBackground["default"];
    lightGray: TypeBackground["default"];
    neutral: TypeBackground["default"];
    GFBackground: TypeBackground["default"];
    GFForeground: TypeBackground["default"];
    GFPaper: TypeBackground["default"];
    ContentArea: TypeBackground["default"];
    LeftNavTop: TypeBackground["default"];
    LeftNavBody: TypeBackground["default"];
    GFRightNavBackground: TypeBackground["default"];
    GFRightNavForeground: TypeBackground["default"];
    GFSearch: TypeBackground["default"];
    GFOverlay: TypeBackground["default"];
    GFOutlineNav: TypeBackground["default"];
    GFCardOutline: TypeBackground["default"];
    GFCardBG: TypeBackground["default"];
    GF36: TypeBackground["default"];
    GFTopNav: TypeBackground["default"];
    AvatarOutline: TypeBackground["default"];
    GF80: TypeBackground["default"];
    GF70: TypeBackground["default"];
    GF60: TypeBackground["default"];
    GF50: TypeBackground["default"];
    GF40: TypeBackground["default"];
    GF20: TypeBackground["default"];
    GF7: TypeBackground["default"];
    GF5: TypeBackground["default"];
    GF10: TypeBackground["default"];
    Groups: TypeBackground["default"];
    Setting: TypeBackground["default"];
    LinearGF: TypeBackground["default"];
    Dashboard: TypeBackground["default"];
    TableBG: TypeBackground["default"];
    TableCustomBG: TypeBackground["default"];
    CardsCustomBG: TypeBackground["default"];
    SubNavHoverBG: TypeBackground["default"];
    presentationActive: TypeBackground["default"];
    cardsBorder: TypeBackground["default"];
    cardsBG: TypeBackground["default"];
  }

  interface TypeBackgroundOptions {
    neutral: TypeBackground["default"];
  }

  interface Palette {
    other?: OtherPaletteProperties;
    gfGrey: Partial<Color> & {
      textGray: string;
      GF50: string;
      GF75: string;
      GF100: string;
      "GF50%": string;

      "GF60%": string;
      "GF40%": string;
      "GF15%": string;
      GFBoxer: string;
      Groups: string;
      LightGrey: string;
      AvatarOutline: string;
    };
    indigo: Partial<Color>;
    deepPurple: Partial<Color> & { GFPurple: string; GFLightPurple: string };
    amber: Partial<Color>;
    pink: Partial<Color>;
    orange: Partial<Color> & {
      GFOrange: string;
      GFOrangeLight: string;
      GFOrangeBright: string;
      Status: string;
    };
    deepOrange: Partial<Color>;
    green: Partial<Color> & {
      GFGreen: string;
      GFGreenLight: string;
      GFShocking: string;
    };
    red: Partial<Color> & { GFRed: string; Error: string };
    lightGreen: Partial<Color> & {
      GFGreen: string;
      GFShocking: string;
      GFGreenLight: string;
    };
    purple: Partial<Color> & { GFPurple: string; GFPurpleLight: string };
    lime: Partial<Color>;
    lightBlue: Partial<Color>;
    yellow: Partial<Color> & { GFYellow: string; GFYellowLight: string };
    cyan: Partial<Color> & {
      Fusion: string;
    };
    teal: Partial<Color>;
    blue: Partial<Color> & {
      GFBlue: string;
      GFBlueLight: string;
      Dropbox: string;
      LightBlue: string;
      GFDarkBlue: string;
    };
    blueGray: Partial<Color>;
    commonbg: Partial<Color>;
  }
  interface PaletteOptions {}

  interface PaletteColor {
    darker?: string;
    lighter?: string;
    shades?: ColorShades;
    mainLight?: string;
  }
  interface CommonColors {
    blackshades: Pick<CommonColorShades, "4p" | "12p" | "30p" | "100p">;
    whiteshades: Pick<CommonColorShades, "12p" | "30p" | "100p" | "8p">;
  }

  interface ThemeOptions {
    customShadows?: CustomShadowType;
  }
  interface TypeText {
    muted?: string;
    primary_shades?: Partial<TextTypeShades>;
    secondary_shades?: Partial<TextTypeShades>;
  }
  interface TypographyVariants extends ExtraTypography {}

  interface TypographyVariantsOptions extends ExtraTypography {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    muted: true;
    article: true;
    ButtonLarge: true;
    AlertTitle: true;
    AvatarInitials: true;

    ButtonMedium: true;
    ButtonSmall: true;
    InputLabel: true;
    HelperText: true;
    InputText: true;
    Chip: true;
    Tooltip: true;
    TableHeader: true;
    MenuItem: true;
    MenuItemDense: true;
    ListSubheader: true;
    BottomNavigationActiveLabel: true;
    groups: true;
    tab: true;
    tabSelected: true;
    selectLabel: true;
    selectValue: true;
  }
}

declare module "@mui/material/AvatarGroup" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export default interface LoginState {
  email: string;
  password: string;
}

export default interface Resetstate {
  email: string;
}
