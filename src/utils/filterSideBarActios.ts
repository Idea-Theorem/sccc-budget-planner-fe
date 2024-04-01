import { SidebarAction } from "../types/common";

export function filterSidebarActionsWithMore(
  sidebarActions: SidebarAction[],
  role: any
) {
const user : any= localStorage.getItem('userInfo');
const modifyUser: any = JSON.parse(user)
  let roles : any = []
  modifyUser?.roles?.forEach((element: any) => {
    sidebarActions.forEach(item => {
      if(element.name == item.role) { 
        roles.push(item)
      }
    })
  });

const rolesArray = removeDuplicatesByPath(roles)
 
  const withMore = sidebarActions.filter((action: SidebarAction) => {
    return action.email === "hr@gmail.com";
  });

  const withoutMore = sidebarActions.filter((action: SidebarAction) => {
    return action.email === role && !action.more;
  });

  function removeDuplicatesByPath(arr: any) {
    const uniquePaths: any = {}; // Object to store unique paths
    const result : any = []; // Array to store filtered objects
    
    // Iterate through each object in the array
    arr.forEach((obj:any) => {
        // Check if the path is already encountered
        if (!uniquePaths[obj.path]) {
            // If not encountered, add it to the result array
            result.push(obj);
            // Mark this path as encountered
            uniquePaths[obj.path] = true;
        }
    });
    
    return result;
}

  return { withMore, withoutMore, rolesArray };
}
