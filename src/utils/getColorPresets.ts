// const lightPallete = lightTheme.palette;
import Appthemes from "../theme/palette";
import tinycolor from "tinycolor2";

export const appThemeModes = [
  {
    name: "dark",
    theme: Appthemes["dark"],
    value: "#343434",
  },
  { name: "light", theme: Appthemes["light"], value: "#FAF9F6" },
  {
    name: "blue",
    value: "#8A8AFF",
    theme: Appthemes["blue"],
  },
];
export const lighttheme = appThemeModes[0];
export const darktheme = appThemeModes[1];
export const bluetheme = appThemeModes[2];
export default function getThemeMode(presetsKey: string, routeModule?: string) {
  console.log(routeModule)
  const colorIndex = appThemeModes.findIndex((p) => p.name === presetsKey);
  let themeModes = appThemeModes[0];
  if (colorIndex !== -1) {
    themeModes = appThemeModes[colorIndex];
  }

  const color = tinycolor("rgba(140, 59, 45, 1)");

  // console.log(color.setAlpha(0.08).toRgbString());
  themeModes.theme.palette.primary.main = color.toRgbString();
  themeModes.theme.palette.primary.light = color
    .clone()
    .lighten(10)
    .toRgbString();
  themeModes.theme.palette.primary.dark = color
    .clone()
    .darken(10)
    .toRgbString();
  themeModes.theme.palette.primary.shades = {
    "8p": color.clone().setAlpha(0.08).toRgbString(),
    "12p": color.clone().setAlpha(0.12).toRgbString(),
    "16p": color.clone().setAlpha(0.16).toRgbString(),
    "30p": color.clone().setAlpha(0.3).toRgbString(),
    "50p": color.clone().setAlpha(0.5).toRgbString(),
  };
  return themeModes;
}
