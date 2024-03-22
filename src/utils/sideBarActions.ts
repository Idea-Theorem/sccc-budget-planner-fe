import { SidebarAction } from "../types/common";

export const SIDEBARACTIONS: SidebarAction[] = [
  {
    email: "programhead@gmail.com",
    role: "Program Head",
    title: "Programs",
    path: "/program-head",
  },
  {
    email: "departmenthead@gmail.com",
    role: "Department Head",
    title: "Review Budgets",
    path: "/department-head/review-budgets",
  },
  {
    email: "departmenthead@gmail.com",
    role: "Department Head",
    title: "Program",
    path: "/department-head/program",
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
    title: "Programs",
    path: "/program-head",
  },
  {
    email: "admin@gmail.com",
    role: "Admin",
    title: "HR",
    path: "/hr",
    more: [{ title: "Settings", path: "/hr/settings" }],
  },
  {
    email: "hr@gmail.com",
    role: "HR",
    title: "HR",
    path: "/hr",
    more: [{ title: "Settings", path: "/hr/settings" }],
  },
  { email: "suparadmin@gmail.com", role: "Super Admin", title: "Dashboard" },
  {
    email: "suparadmin@gmail.com",
    role: "Super Admin",
    title: "Review Budgets",
  },
  {
    email: "suparadmin@gmail.com",
    role: "Super Admin",
    title: "Programs",
    path: "/program-head/program",
  },
  { email: "suparadmin@gmail.com", role: "Super Admin", title: "HR" },
];
