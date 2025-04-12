// ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean; // Authentication flag
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, isAuthenticated }) => {
  // Check if user is authenticated, if not redirect to login page
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
