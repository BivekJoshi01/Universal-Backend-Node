// RouteRenderer.tsx
import React from "react";
import { Route } from "react-router";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

interface RouteRendererProps {
  routes: RouteConfig[];
}

const flattenRoutes = (routes: RouteConfig[]): React.ReactNode[] => {
  return routes.flatMap((route, index) => [
    <Route key={index} path={route.path} element={route.element} />,
    ...(route.children ? flattenRoutes(route.children) : []),
  ]);
};

const RouteRenderer: React.FC<RouteRendererProps> = ({ routes }) => {
  return <>{flattenRoutes(routes)}</>;
};

export default RouteRenderer;