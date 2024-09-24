import { FC, PropsWithChildren } from 'react';
import useAuth from '../hooks/useAuth';
import { Route, Navigate, RouteProps } from 'react-router-dom';

export interface Props extends PropsWithChildren, RouteProps {

}

/**
 * PrivateRoute
 */
const PrivateRoute: FC<Props> = ({children, ...props}) => {
    let {user} = useAuth();
  return (
    <Route
      {...props}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;