import { Navigate, Outlet, useLocation } from "react-router-dom";

const SecureLayout = ({ allowedRoles }: { allowedRoles?: string[] }) => {
  // const userInfo: any = localStorage.getItem("userInfo");

  // const hasRequiredRole = () => {
  //   const user = JSON.parse(userInfo);
  //   // return user?.roles?.some((role: any) => ["HR", "ADMIN", "Super_Admin"].includes(role.name));
  //   return ["HR", "ADMIN", "Super_Admin", "dept"].some((role: any) =>
  //     user?.roles.includes(role.name)
  //   );
  // };

  const location = useLocation();
  // checking for token
  const token = localStorage.getItem("authToken");
  const isAuthenticated = !!token;

  //const loading = isLoading;

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default SecureLayout;
