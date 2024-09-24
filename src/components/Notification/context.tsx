import { createContext } from "react";

export interface NotificationContext {
    notify: (message: string) => void;
}

const context = createContext<NotificationContext>({
    notify: () => { }
});

export default context;