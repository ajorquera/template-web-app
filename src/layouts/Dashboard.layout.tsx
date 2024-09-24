import useAuth from "@/components/Auth/hooks/useAuth";
import React, { FC } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export interface Props {
 
}

const DashboardLayout: FC<Props> = () => {
    const {user} = useAuth();
    const location = useLocation();
    
    return user ?  <Outlet /> : <Navigate replace state={{from: location.pathname}} to="/login" />;
}

export default DashboardLayout;