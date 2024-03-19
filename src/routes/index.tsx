import {
  HTMLAttributes,
  Suspense,
} from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";

export function Loadable<T>(
  Component: React.ComponentType<any>
) {
  return (props: HTMLAttributes<T> & { [key: string]: any }) => (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  );
}

const Index = () => {
  const publicElement = useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />
    },
    ...publicRoutes,
  ]);
  return (
    <div className="main-container-wrapper h-100" id="main-container-wrapper">
      {publicElement}
    </div>
  );
};

export default Index;
