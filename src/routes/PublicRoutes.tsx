import { Navigate, RouteObject } from "react-router-dom";

import SecureLayout from "../layouts/SecureLayout";
import SideBarLayout from "../layouts/SideBar";
import Layout from "../layouts/SimpleLayout";
import ComponentsScreen from "../pages/Components";
import AdminScreen from "../pages/Dashboards/Admin";
import AdminProgramScreen from "../pages/Dashboards/Admin/adminProgram";
import DepartmentDetailScreen from "../pages/Dashboards/Admin/departmentDetail";
import ReviewBudgetScreen from "../pages/Dashboards/Admin/reviewBudget";
import ProgramHeadScreen from "../pages/Dashboards/ProgramHead";
import CreateProgramScreen from "../pages/Dashboards/ProgramHead/createProgram";
import PHProgramsScreen from "../pages/Dashboards/ProgramHead/programs";
import AddCenter from "../pages/Dashboards/SuperAdmin/AddCenter";
import AddDepartment from "../pages/Dashboards/SuperAdmin/AddDepartment";
import AddEmployee from "../pages/Dashboards/SuperAdmin/AddEmployee";
import HREmployees from "../pages/Dashboards/SuperAdmin/HREmployees/index";
import HomeScreen from "../pages/Home";
import LoginScreen from "../pages/Login";
import DHReviewBudgets from "../pages/Dashboards/DepartmentHead/reviewBudgets";
import ProgramReview from "../pages/Dashboards/DepartmentHead/program-review";
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
          // element: <ProgramHeadScreen />,
          children: [
            { index: true, element: <ProgramHeadScreen /> },
            { path: "program", element: <PHProgramsScreen /> },
            { path: "create", element: <CreateProgramScreen /> },
          ],
        },
        {
          path: "/admin",
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
          path: "/hr",
          // element: <AdminScreen />,
          children: [
            // { index: true, element: <SuperAdminMain name="raoof" /> },
            { index: true, element: <Navigate to="/hr/employees" /> },
            { path: "employees", element: <HREmployees name="HR-Employees" /> },
            { path: "addemployees", element: <AddEmployee /> },
            { path: "adddepartment", element: <AddDepartment /> },
            { path: "addcenter", element: <AddCenter /> },
            {path: "settings", element: <div>Settings</div>}
          ],
        },
        {
          path: "/department-head",
          // element: <ProgramHeadScreen />,
          children: [
            { index: true, element: <ProgramHeadScreen /> },
            { path: "program", element: <CreateProgramScreen /> },
            { path: "review-budgets", element: <DHReviewBudgets /> },
            { path: "program-review", element: <ProgramReview /> },
          ],
        },
      ],
    },
  ],
};
export const publicRoutes: RouteObject[] = [authRoutes, normalRoutes];
