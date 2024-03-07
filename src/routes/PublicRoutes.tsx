import { Outlet, RouteObject } from "react-router-dom";
import Home from "../Pages/home";
import About from "../Pages/about";
import Login from "../Pages/login";
import Component from "../Pages/component";
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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "component",
        element: <Component />,
      },
    ],
  },
];
