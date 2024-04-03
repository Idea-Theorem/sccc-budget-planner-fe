import { useAuth } from "../contexts/AuthContext";
import { SidebarAction } from "../types/common";

export function filterSidebarActionsWithMore(
  sidebarActions: SidebarAction[],
  role: any
) {
const { currentRole} = useAuth()

// const user : any= localStorage.getItem('userInfo');
// const modifyUser: any = JSON.parse(user)
//   let roles : any = []
//   modifyUser?.roles?.forEach((element: any) => {
//     sidebarActions.forEach(item => {
//       if(element.name == item.role) { 
//         roles.push(item)
//       }
//     })
//   });

// const rolesArray = removeDuplicatesByPath(roles)
 
  const withMore = sidebarActions.filter((action: SidebarAction) => {
    return action.role === currentRole;
  });

  const withoutMore = sidebarActions.filter((action: SidebarAction) => {
    return action.email === role && !action.more;
  });

const rolesArray : any= []

  return { withMore, withoutMore, rolesArray };
}
