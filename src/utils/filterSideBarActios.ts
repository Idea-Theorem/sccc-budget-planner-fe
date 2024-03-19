export function filterSidebarActions(
  sidebarActions: SidebarAction[],
  role: string
) {
  return sidebarActions.filter((action: SidebarAction) => action.role === role);
}
