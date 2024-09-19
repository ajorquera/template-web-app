import React from "react";
import { Login } from "./pages/Login/Login";
import OuterLayout from "./layouts/Outer.layout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Register from "./pages/Register/Register";
import ForgotPassConfirm from "./pages/ForgotPass/ForgotPassConfirm";
import DashboardLayout from "./layouts/Dashboard.layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <OuterLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassConfirm />,
        }
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: []
    },
    {
      path: "*",
      element: <Navigate to="/login" />
    }
  ]);

  export default router;