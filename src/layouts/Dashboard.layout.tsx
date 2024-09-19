import React, { FC } from "react";
import { Outlet } from "react-router-dom";

export interface Props {
 
}

const DashboardLayout: FC<Props> = () => {
    return <Outlet />;
}

export default DashboardLayout;