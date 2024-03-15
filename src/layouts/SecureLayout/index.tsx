import { Navigate, Outlet, useLocation } from "react-router-dom";

import { getLocalStorage } from "../../utils";

const SecureLayout = ({ allowedRoles }: { allowedRoles?: string[] }) => {
  console.log(allowedRoles);
  const token = getLocalStorage("token", false);
  const location = useLocation();

  //const loading = isLoading;

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return !token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default SecureLayout;
