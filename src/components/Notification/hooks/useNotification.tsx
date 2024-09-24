import { useContext } from "react"
import context from "../context";

const useNotification = () => {
    return useContext(context);
};

export default useNotification;