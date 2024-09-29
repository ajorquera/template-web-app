import { useContext } from "react"
import context from "../context";

const useNotification = () => {
    const notificationContext = useContext(context);

    if(!notificationContext) {
        throw new Error("useNotification must be used within a NotificationProvider");
    }

    return notificationContext;
};

export default useNotification;