import { SidebarAction } from "../types/common";

export function filterSidebarActionsWithMore(
  sidebarActions: SidebarAction[],
  role: string
) {
  const withMore = sidebarActions.filter((action: SidebarAction) => {
    return action.role === role && action.more;
  });

  const withoutMore = sidebarActions.filter((action: SidebarAction) => {
    return action.role === role && !action.more;
  });

  return { withMore, withoutMore };
}
