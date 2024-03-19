export const SIDEBARACTIONS: SidebarAction[] = [
  { role: "Program Head", title: "Program", path: "/program-head/program" },
  { role: "Department Head", title: "Program" },
  { role: "Department Head", title: "Review Budgets" },
  { role: "Admin", title: "Dashboard", path: "/admin" },
  { role: "Admin", title: "Review Budgets", path: "/admin/review-budget" },
  { role: "Admin", title: "Programs", path: "/admin/programs" },
  {
    role: "Admin",
    title: "HR",
    path: "/admin/settings",
    more: [{ title: "Settings", path: "/admin/settings" }],
  },
  { role: "Super Admin", title: "Dashboard" },
  { role: "Super Admin", title: "Review Budgets" },
  { role: "Super Admin", title: "Programs" },
  { role: "Super Admin", title: "HR" },
];
