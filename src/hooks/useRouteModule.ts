import React from "react";
import { matchPath, useLocation } from "react-router-dom";

const useRouteModule = () => {
  const location = useLocation();

  const routeModule = React.useMemo(() => {
    if (matchPath("/home/", location.pathname)) return "home";
  }, [location.pathname]);

  return routeModule;
};

export default useRouteModule;
