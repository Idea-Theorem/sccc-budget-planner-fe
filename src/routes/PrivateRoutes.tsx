import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoutes = ({ element: Element, ...rest }: any) => {
    const { user }: any = useAuth();
    const hasRequiredRole = () => {
        // Logic to check if the current user has the required roles
        // For simplicity, let's assume the user has the required roles if they are either "HR" or "ADMIN"
        const roles = user?.roles
        return roles?.some((role: any) => ["HR", "ADMIN"].includes(role.name));
      };
  return (
    <div>
        <Routes>
       <Route
      {...rest}
      element={hasRequiredRole() ? <Element /> : <Navigate to="/unauthorized" />}
    />
    </Routes>
    </div>
  )
}

export default PrivateRoutes
