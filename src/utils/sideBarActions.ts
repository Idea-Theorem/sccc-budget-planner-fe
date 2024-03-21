export const SIDEBARACTIONS: SidebarAction[] = [
  { role: "Program Head", title: "Programs", path: "/program-head" },
  { role: "Department Head", title: "Program" },
  { role: "Department Head", title: "Review Budgets" },
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
