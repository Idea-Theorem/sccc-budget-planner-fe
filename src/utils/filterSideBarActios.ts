import { handleRole } from ".";
import { useAuth } from "../contexts/AuthContext";
import { SidebarAction } from "../types/common";

export function filterSidebarActionsWithMore(sidebarActions: SidebarAction[]) {
  const { currentRole } = useAuth();

  const withMore = sidebarActions.filter((action: SidebarAction) => {
    return action.role === handleRole(currentRole);
  });

  return { withMore };
}
