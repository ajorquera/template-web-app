import { FC, PropsWithChildren } from 'react';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Navigate } from 'react-router-dom';

export interface Props extends PropsWithChildren {

}

/**
 * PrivateRoute
 */
const PrivateRoute: FC<Props> = ({children, ...props}) => {
    const {authStatus} = useAuthenticator();

    if(authStatus === 'configuring') return null

    const isAuthorized = authStatus === 'authenticated';

    return isAuthorized ? children : <Navigate to="/login" />;
};

export default PrivateRoute;