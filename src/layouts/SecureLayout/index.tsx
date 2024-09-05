import { Navigate, Outlet, useLocation } from "react-router-dom";

const SecureLayout = ({ allowedRoles }: { allowedRoles?: string[] }) => {
  console.log(allowedRoles);

  const location = useLocation();

  return true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default SecureLayout;
