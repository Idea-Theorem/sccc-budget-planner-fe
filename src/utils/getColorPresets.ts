// const lightPallete = lightTheme.palette;
import Appthemes from "../theme/palette";

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

  return themeModes;
}
