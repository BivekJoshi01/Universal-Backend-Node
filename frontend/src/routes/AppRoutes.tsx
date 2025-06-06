// AppRoutes.tsx
import React from "react";
import { HashRouter, Route, Routes } from "react-router";
import AdminPageLayout from "../layout/AdminPageLayout";

// ---------------------------------------------------------------------------------------u
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import { MenuRoutesConfig } from "./routesConfig";
import LandingPage from "../pages/Landing/LandingPage";
import SignUpVerification from "../pages/Auth/Register/SignUpVerification";
import AuthLayout from "../pages/Auth/AuthLayout";
import LoginPage from "../pages/Auth/Login/LoginPage";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/Auth/ForgotPassword/ResetPassword";
// ------------------------------------------------------------------------------------------



const AppRoutes: React.FC = () => {

  return (
    <HashRouter>
      <Routes>
        {/* Root route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-email" element={<SignUpVerification />} />
          <Route path="reset-password/:id" element={<ResetPassword />} />
        </Route>


        {/* Admin routes */}
        <Route element={<AdminPageLayout />}>
          {MenuRoutesConfig?.map((headRoute, index) => {
            return (
              <Route key={index} path={headRoute.path} element={<headRoute.element />}>
                {headRoute.headChildren?.map((headChildren, childIndex) => (
                  <Route key={childIndex} path={headChildren.path} element={<headChildren.element />}>
                    {headChildren?.children?.map((childRoute, grandChildIndex) => (
                      <Route
                        key={grandChildIndex}
                        path={childRoute.path}
                        element={<childRoute.element />}
                      />
                    ))}
                  </Route>
                ))}
              </Route>
            );
          })}
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
