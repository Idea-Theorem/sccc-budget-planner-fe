import { RouteObject } from "react-router-dom";

import HomeScreen from "../pages/Home";
import LoginScreen from "../pages/Login";
import Layout from "../layouts/SimpleLayout";
import SecureLayout from "../layouts/SecureLayout";
import SideBarLayout from "../layouts/SideBar";
import ComponentsScreen from "../pages/Components";
import ProgramHeadScreen from "../pages/Dashboards/ProgramHead";
import AdminScreen from "../pages/Dashboards/Admin";
const authRoutes: RouteObject = {
  path: "*",
  children: [
    {
      path: "login",
      element: <LoginScreen />,
    },
  ],
};
const normalRoutes: RouteObject = {
  path: "",
  element: <Layout />,
  children: [
    {
      path: "",
      element: <SecureLayout />,
      children: [
        {
          path: "/home",
          element: (
            <SideBarLayout>
              <HomeScreen />
            </SideBarLayout>
          ),
        },
        {
          path: "/components",
          element: <ComponentsScreen />,
        },
        {
          path: "/program-head",
          element: (
            <SideBarLayout>
              <ProgramHeadScreen />
            </SideBarLayout>
          ),
        },
        {
          path: "/admin",
          element: (
            <SideBarLayout>
              <AdminScreen />
            </SideBarLayout>
          ),
        },
      ],
    },
  ],
};
export const publicRoutes: RouteObject[] = [authRoutes, normalRoutes];
