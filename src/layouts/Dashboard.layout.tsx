import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import {Header, Sidebar, SidebarProps, Flex, Text, Page} from "../components";
import PrivateRoute from "../components/PrivateRoute";


export interface Props {
 
}

const SIDEBAR_ITEMS: SidebarProps['items'] = [
    {
        label: 'My Dashboard',
        href: '/dashboard'
    },
    {
        label: 'Connections',
        href: '/dashboard/connections'
    }
]

const DashboardLayout: FC<Props> = () => {
    return (
        <PrivateRoute>
            <Flex height="100%" flexDirection="column">
                <Header />
                <Flex flexGrow={1}>
                    <Sidebar items={SIDEBAR_ITEMS} />
                    <Page width="100%">
                        <Outlet />
                    </Page>
                </Flex>
            </Flex>
        </PrivateRoute>
    );
}

export default DashboardLayout;