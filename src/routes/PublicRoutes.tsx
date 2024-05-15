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
import ProgramSetting from "../pages/Dashboards/ProgramHead/program-setting";
import ProgramCodes from "../pages/Dashboards/ProgramHead/programCodes";
import HRSettings from "../pages/Components/HRComponents/HRSettings";
import ProgramsDraftScreen from "../pages/Dashboards/ProgramHead/draft";
import SuperAdminProgramScreen from "../pages/SuperAdmin/superAdminProgram";
import SuperReviewBudget from "../pages/SuperAdmin/SuperReviewBudget";
import SuperAdminScreen from "../pages/SuperAdmin";
import SuperDepartmentDetail from "../pages/SuperAdmin/superDepartmentDetail";
import HRRole from "../pages/Dashboards/ProgramHead/hrRole";
import RecreationAndCultureScreen from "../pages/Dashboards/Admin/recreation-culture";
import Benefit from "../pages/Dashboards/ProgramHead/benefit";

const authRoutes: RouteObject = {
  path: "*",
  children: [
    {
      path: "login",
      element: <LoginScreen />,
    },
  ],
};

const adminRoute: RouteObject = {
  path: "",
  element: <Layout />,
  children: [
    {
      path: "/admin",
      element: (
        <SideBarLayout>
          <SecureLayout />
        </SideBarLayout>
      ),
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
        { path: "recreation", element: <RecreationAndCultureScreen /> },
        { path: "programs", element: <AdminProgramScreen /> },
        { path: "settings", element: <AdminProgramScreen /> },
      ],
    },
  ],
};

const superAdminRoute: RouteObject = {
  path: "",
  element: <Layout />,
  children: [
    {
      path: "/super-admin",
      element: (
        <SideBarLayout>
          <SecureLayout />
        </SideBarLayout>
      ),
      children: [
        { index: true, element: <SuperAdminScreen /> },
        {
          path: "review-budgets",
          children: [
            { index: true, element: <SuperReviewBudget /> },
            {
              path: "department-detail",
              element: <DepartmentDetailScreen />,
            },
          ],
        },
        { path: "super-department", element: <SuperDepartmentDetail /> },
        { path: "program", element: <SuperAdminProgramScreen /> },
      ],
    },
  ],
};

const programHeadRoute: RouteObject = {
  path: "",
  element: <Layout />,

  children: [
    {
      path: "/program-head",
      element: (
        <SideBarLayout>
          <SecureLayout />
        </SideBarLayout>
      ),
      // element: <ProgramHeadScreen />,
      children: [
        { index: true, element: <ProgramHeadScreen /> },
        { path: "program", element: <PHProgramsScreen /> },
        { path: "create", element: <CreateProgramScreen /> },
        { path: "program-settings", element: <ProgramSetting /> },
        { path: "program-codes", element: <ProgramCodes /> },
        { path: "draft", element: <ProgramsDraftScreen /> },
      ],
    },
  ],
};

const hrRoute: RouteObject = {
  path: "",
  element: <Layout />,

  children: [
    {
      path: "/hr",
      element: (
        <SideBarLayout>
          <SecureLayout />
        </SideBarLayout>
      ),
      // element: <AdminScreen />,
      children: [
        // { index: true, element: <SuperAdminMain name="raoof" /> },
        { index: true, element: <Navigate to="/hr/employees" /> },
        { path: "employees", element: <HREmployees name="HR-Employees" /> },
        { path: "addemployees", element: <AddEmployee /> },
        { path: "adddepartment", element: <AddDepartment /> },
        { path: "addcenter", element: <AddCenter /> },
        { path: "settings", element: <HRSettings /> },
        { path: "role", element: <HRRole /> },
        { path: "benefits", element: <Benefit /> },
      ],
    },
  ],
};

const departmentHeadRoute: RouteObject = {
  path: "",
  element: <Layout />,

  children: [
    {
      path: "/department-head",
      element: (
        <SideBarLayout>
          <SecureLayout />
        </SideBarLayout>
      ),
      // element: <ProgramHeadScreen />,
      children: [
        {
          index: true,
          element: <Navigate to="/department-head/review-budgets" />,
        },
        { path: "program", element: <CreateProgramScreen /> },
        { path: "review-budgets", element: <DHReviewBudgets /> },
        { path: "program-review", element: <ProgramReview /> },
      ],
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
      ],
    },
  ],
};
export const publicRoutes: RouteObject[] = [
  authRoutes,
  normalRoutes,
  adminRoute,
  programHeadRoute,
  hrRoute,
  departmentHeadRoute,
  superAdminRoute,
];
