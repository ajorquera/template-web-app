import React, { createContext, FC, PropsWithChildren, useState } from "react";

const context = createContext({});

interface Props extends PropsWithChildren {
    
}

const Provider: FC<Props> = ({children}) => {
    const [isValid, setIsValid] = useState(false);

    const value = {isValid};
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    );
};

export default Provider;