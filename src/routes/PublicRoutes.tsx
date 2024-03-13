import { Outlet, RouteObject } from "react-router-dom";

import HomeScreen from "../pages/Home";
import LoginScreen from "../pages/Login";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <LoginScreen />,
      },
      {
        path: "home",
        element: <HomeScreen />,
      },
    ],
  },
];
