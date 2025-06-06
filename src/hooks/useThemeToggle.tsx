import { Direction } from "@mui/material/styles";

import type {} from "@mui/x-date-pickers/themeAugmentation";
import { useMemo } from "react";
import getThemeMode from "../utils/getColorPresets";
import useRouteModule from "./useRouteModule";

type Props = {
  themeMode?: ThemeModes;
  themeDirection: "ltr" | "rtl";
};

const useThemeToggle = (props: Props) => {
  const { themeMode = "light", themeDirection = "ltr" } = props;

  const routeModule = useRouteModule();

  const theme = useMemo(() => {
    const theme = getThemeMode(themeMode);

    const newTheme = {
      ...theme.theme,
      direction: themeDirection as Direction,
    };
    return newTheme;
  }, [themeMode, themeDirection, routeModule]);
  return theme;
};

export default useThemeToggle;
