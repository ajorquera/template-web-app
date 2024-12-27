import React from "react";
import Login, { AmplifyLogin, NewLogin } from "./pages/Login";
import OuterLayout from "./layouts/Outer.layout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Register from "./pages/Register";
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
          path: "amplify-login",
          element: <AmplifyLogin />,
        },{
          path: "new-login",
          element: <NewLogin />,
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