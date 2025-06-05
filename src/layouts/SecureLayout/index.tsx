import { Navigate, Outlet, useLocation } from "react-router-dom";

const SecureLayout = ({ allowedRoles }: { allowedRoles?: string[] }) => {
  const location = useLocation();

  const token = localStorage.getItem("authToken");
  const isAuthenticated = !!token;

  //const loading = isLoading;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default SecureLayout;
