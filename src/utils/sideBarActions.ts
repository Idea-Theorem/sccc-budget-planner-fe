import { SidebarAction } from "../types/common";

export const SIDEBARACTIONS: SidebarAction[] = [
  {
    role: "Program_Head",
    title: "Programs",
    path: "/program-head",
    more: [
      { title: "Settings", path: "/program-head/program-settings" },
      { title: "Codes", path: "/program-head/program-codes" },
    ],
  },
  // {
  //   email: "programhead@gmail.com",
  //   role: "Program_Head",
  //   title: "Programs",
  //   path: "/program-head",
  // },
  {
    email: "departmenthead@gmail.com",
    role: "Department_Head",
    title: "Review Budgets",
    path: "/department-head/review-budgets",
  },
  // {
  //   email: "departmenthead@gmail.com",
  //   role: "Department_Head",
  //   title: "Programs",
  //   path: "/program-head",
  // },
  {
    email: "admin@gmail.com",
    role: "Admin",
    title: "Dashboard",
    path: "/admin",
  },
  {
    email: "admin@gmail.com",
    role: "Admin",
    title: "Review Budgets",
    path: "/admin/review-budget",
    // path:"/department-head/review-budgets",
  },
  {
    email: "admin@gmail.com",
    role: "Admin",
    title: "Programs",
    path: "/program-head",
  },
  {
    email: "admin@gmail.com",
    role: "Admin",
    title: "HR",
    path: "/hr/role",
    more: [
      // { title: "Settings", path: "/hr/settings" },
      { title: "Title", path: "/hr/role" },
      { title: "Benefit Percentage", path: "/hr/benefits" },
      { title: "Department", path: "/hr/departments" },
    ],
  },
  {
    email: "hr@gmail.com",
    role: "HR",
    title: "HR",
    path: "/hr",
    more: [
      // { title: "Settings", path: "/hr/settings" },
      { title: "Title", path: "/hr/role" },
      { title: "Benefit Percentage", path: "/hr/benefits" },
      { title: "Department", path: "/hr/departments" },
      { title: "Centers", path: "/hr/centers" },
    ],
  },
  {
    email: "suparadmin@gmail.com",
    role: "Super_Admin",
    title: "Dashboard",
    path: "/super-admin",
  },
  {
    email: "suparadmin@gmail.com",
    role: "Super_Admin",
    path: "/super-admin/review-budgets",
    title: "Review Budgets",
  },
  {
    email: "suparadmin@gmail.com",
    role: "Super_Admin",
    title: "HR",
    path: "/hr/role",
    more: [
      // { title: "Settings", path: "/hr/settings" },
      { title: "Title", path: "/hr/role" },
      { title: "Benefit Percentage", path: "/hr/benefits" },
      { title: "Department", path: "/hr/departments" },
      { title: "Centers", path: "/hr/centers" },
    ],
  },
  {
    email: "coordinator@gmail.com",
    role: "Coordinator",
    title: "Programs",
    path: "/program-head",
  },
];
