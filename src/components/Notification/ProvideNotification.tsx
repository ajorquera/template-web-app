import useProvideNotification from "./hooks/useProvideNotification";
import { FC, PropsWithChildren, ReactNode } from "react";
import { createPortal } from "react-dom";
import context from "./context";

const ProvideNotification: FC<PropsWithChildren> = ({ children }) => {
    const {node, ...notification} = useProvideNotification();
    return (
        <context.Provider value={notification}>
            {createPortal(node, document.body)}
            {children}
        </context.Provider>
    ) as ReactNode;
};

export default ProvideNotification;