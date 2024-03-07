import { Outlet, RouteObject } from "react-router-dom";
import Home from "../Pages/home";
import About from "../Pages/about";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];
