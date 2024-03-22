import { SidebarAction } from "../types/common";

export const SIDEBARACTIONS: SidebarAction[] = [
  { role: "Program Head", title: "Programs", path: "/program-head", 
    more: [{title: "Settings", path: "/program-head/program-settings"},
    {title: "Codes", path: "/program-head/program-codes"} ]
  },
  {
    role: "Department Head",
    title: "Review Budgets",
    path: "/department-head/review-budgets",
  },
  {
    role: "Department Head", 
    title: "Program",
    path: "/department-head/program",
  },
  { role: "Admin", title: "Dashboard", path: "/admin" },
  { role: "Admin", title: "Review Budgets", path: "/admin/review-budget" },
  { role: "Admin", title: "Programs", path: "/program-head" },
  {
    role: "Admin",
    title: "HR",
    path: "/hr",
    more: [{ title: "Settings", path: "/hr/settings" }],
  },
  {
    role: "HR",
    title: "HR",
    path: "/hr",
    more: [{ title: "Settings", path: "/hr/settings" }],
  },
  { role: "Super Admin", title: "Dashboard" },
  { role: "Super Admin", title: "Review Budgets" },
  { role: "Super Admin", title: "Programs", path: "/program-head/program" },
  { role: "Super Admin", title: "HR" },
];
