import { createContext } from "react";

export interface NotificationContext {
    notify: (message: string) => void;
    dismiss: () => void;
    node: React.ReactNode | null;
}

const context = createContext<NotificationContext | null>(null);

export default context;