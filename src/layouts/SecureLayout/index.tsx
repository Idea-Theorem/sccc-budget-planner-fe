import { Navigate, Outlet, useLocation } from "react-router-dom";

const SecureLayout = ({ allowedRoles }: { allowedRoles?: string[] }) => {
  console.log(allowedRoles);
  const userInfo: any = localStorage.getItem("userInfo");
  
  const hasRequiredRole = () => {
    const user = JSON.parse(userInfo)
    return user?.roles?.some((role: any) => ["HR", "ADMIN", "Super_Admin"].includes(role.name));
  };

  const location = useLocation();

  //const loading = isLoading;

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return hasRequiredRole() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default SecureLayout;
