import { RouteObject } from "react-router-dom";

import HomeScreen from "../pages/Home";
import LoginScreen from "../pages/Login";
import Layout from "../layouts/SimpleLayout";
import SecureLayout from "../layouts/SecureLayout";
import SideBarLayout from "../layouts/SideBar";
import ComponentsScreen from "../pages/Components";
import ProgramHeadScreen from "../pages/Dashboards/ProgramHead";
import AdminScreen from "../pages/Dashboards/Admin"; 
import SuperAdminMain from "../pages/Dashboards/SuperAdmin/index" 
import HREmployees from "../pages/Dashboards/SuperAdmin/HREmployees/index" 
import AddEmployee from "../pages/Dashboards/SuperAdmin/AddEmployee";
import AddDepartment from "../pages/Dashboards/SuperAdmin/AddDepartment";
import AddCenter from "../pages/Dashboards/SuperAdmin/AddCenter";
import ReviewBudgetScreen from "../pages/Dashboards/Admin/reviewBudget";
import AdminProgramScreen from "../pages/Dashboards/Admin/adminProgram";
import DepartmentDetailScreen from "../pages/Dashboards/Admin/departmentDetail";
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
      element: (
        <SideBarLayout>
          <SecureLayout />
        </SideBarLayout>
      ),
      children: [
        {
          path: "/home",
          element: <HomeScreen />,
        },
        {
          path: "/components",
          element: <ComponentsScreen />,
        },
        {
          path: "/program-head",
          element: <ProgramHeadScreen />,
        },
        {
          path: "/admin",
          // element: <AdminScreen />,
          children: [
            { index: true, element: <AdminScreen /> },
            {
              path: "review-budget",
              children: [
                { index: true, element: <ReviewBudgetScreen /> },
                {
                  path: "department-detail",
                  element: <DepartmentDetailScreen />,
                },
              ],
            },
            { path: "programs", element: <AdminProgramScreen /> },
            { path: "settings", element: <AdminProgramScreen /> },
          ],
        }, 
        {
          path: "/superAdmin",
          // element: <AdminScreen />,
          children: [
            { index: true, element: <SuperAdminMain name="raoof"/> },
            { path: "hr-employees", element: <HREmployees name="HR-Employees"/> }, 
            { path: "hr-addemployees", element: <AddEmployee /> }, 
            { path: "hr-adddepartment", element: <AddDepartment /> }, 
            { path: "hr-addcenter", element: <AddCenter /> },
          ],
        },
      ],
    },
  ],
};
export const publicRoutes: RouteObject[] = [authRoutes, normalRoutes];
