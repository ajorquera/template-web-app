import { FC, PropsWithChildren, ReactNode } from 'react';
import useProvideAuth from './hooks/useProvideAuth';
import context from './context';
/**
 * ProvideAuth
 */
const ProvideAuth: FC<PropsWithChildren> = ({children}) => {
    const auth = useProvideAuth();

    return (
        <context.Provider value={auth}>
            {children}
        </context.Provider>
    ) as ReactNode;
};

export default ProvideAuth;