import { FC, PropsWithChildren } from 'react';
import useProvideAuth from './hooks/useProvideAuth';
import context from './context';
/**
 * ProvideAuth
 */
const ProvideAuth: FC<PropsWithChildren> = ({children, ...props}) => {
    const auth = useProvideAuth();

    return (
        <context.Provider value={auth}>
            {children}
        </context.Provider>
    );
};

export default ProvideAuth;