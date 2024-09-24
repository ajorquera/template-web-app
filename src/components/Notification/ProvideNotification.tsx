import { FC, PropsWithChildren } from "react";
import context from "./context";
import useProvideNotification from "./hooks/useProvideNotification";

const ProvideNotification: FC<PropsWithChildren> = ({ children }) => {
    const notification = useProvideNotification();

    <context.Provider value={notification}>
        {children}
    </context.Provider>
};

export default ProvideNotification;