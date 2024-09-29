import Login from "./components/NewLogin";
import {useAuth} from "@/components/Auth";
import { useNavigate } from "react-router-dom";
import {useNotification} from "@/components/Notification";
import { useEffect } from "react";

const LoginPage = () => {
    const {signIn, user, loading} = useAuth();
    const {notify} = useNotification();
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate("dashboard/home");
        }
    }, [user]);

    const onSubmit = ({username, password}) => {
        signIn({username, password})
            .catch(err => {
                notify(err.message);
            });
    }

    return (
        <Login loading={loading} onSubmit={onSubmit} />
    );
}

export default LoginPage;