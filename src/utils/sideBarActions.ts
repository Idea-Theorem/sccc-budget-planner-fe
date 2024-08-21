import { SidebarAction } from "../types/common";

export const SIDEBARACTIONS: SidebarAction[] = [
  {
    role: "Coordinator",
    title: "Programs",
    path: "/program-head/program",
    more: [
      { title: "Settings", path: "/program-head/program-settings" },
      { title: "Codes", path: "/program-head/program-codes" },
    ],
  },

  {
    email: "departmenthead@gmail.com",
    role: "Department_Head",
    title: "Review Budgets",
    path: "/department-head/review-budgets",
  },

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
  },

  {
    email: "admin@gmail.com",
    role: "Admin",
    title: "HR",
    path: "/hr/role",
    more: [
      { title: "Title", path: "/hr/role" },
      { title: "Benefit %", path: "/hr/benefits" },
      { title: "Department", path: "/hr/departments" },
    ],
  },
  {
    email: "hr@gmail.com",
    role: "HR",
    title: "HR",
    path: "/hr",
    more: [
      { title: "Title", path: "/hr/role" },
      { title: "Benefit %", path: "/hr/benefits" },
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
      { title: "Title", path: "/hr/role" },
      { title: "Benefit %", path: "/hr/benefits" },
      { title: "Department", path: "/hr/departments" },
      { title: "Centers", path: "/hr/centers" },
    ],
  },
];
