import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes = ({ element: Element, ...rest }: any) => {
  const { user }: any = useAuth();
  const hasRequiredRole = () => {
    const roles = user?.roles;
    return roles?.some((role: any) => ["HR", "ADMIN"].includes(role.name));
  };
  return (
    <div>
      <Routes>
        <Route
          {...rest}
          element={
            hasRequiredRole() ? <Element /> : <Navigate to="/unauthorized" />
          }
        />
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
