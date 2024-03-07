import {
  HTMLAttributes,
  Suspense,
} from "react";
import { useRoutes } from "react-router-dom";
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
    ...publicRoutes,
  ]);
  return (
    <div className="main-container-wrapper h-100" id="main-container-wrapper">
      {publicElement}
    </div>
  );
};

export default Index;
