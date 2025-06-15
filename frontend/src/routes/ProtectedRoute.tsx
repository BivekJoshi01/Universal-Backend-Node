// ProtectedRoute.tsx
import React from "react";
import { getUserRole } from "../utils/cookieHelper";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  element: React.ReactElement;
  isAuthenticated: boolean;
  allowedRoles?: string[]; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, isAuthenticated, allowedRoles }) => {
  const role = getUserRole();
  console.log("🚀 ~ role:", role)

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role || "")) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};

export default ProtectedRoute;
