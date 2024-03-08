import { Outlet, RouteObject } from "react-router-dom";
import Login from "../Pages/login";
import Component from "../Pages/component";
import DashBoard from "../Pages/dashboard";
import Layout from "../Layout";
export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: (
          <Layout>
            <DashBoard />
          </Layout>
        ),
      },
      {
        path: "component",
        element: <Component />,
      },
    ],
  },
];
