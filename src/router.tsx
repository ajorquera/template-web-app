import React from "react";
import Login, { AmplifyLogin } from "./pages/Login";
import OuterLayout from "./layouts/Outer.layout";
import { createBrowserRouter, Navigate, Path } from "react-router-dom";
import Register from "./pages/Register/Register";
import ForgotPassConfirm from "./pages/ForgotPass/ForgotPassConfirm";
import DashboardLayout from "./layouts/Dashboard.layout";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <OuterLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/dashboard" />
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "amplify-login",
          element: <AmplifyLogin />,
        }, {
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
      children: [
        {
          path: "home",
          name: "home",
          element: <Dashboard />
        }
      ]
    },
    {
      path: "logout",
      element: <Logout />
    },
    {
      path: "*",
      element: <Navigate to="/login" />
    }
  ]);

  export default router;