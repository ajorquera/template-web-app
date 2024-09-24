import React from "react";
import Login from "./components/NewLogin";
import {useAuth} from "@/components/Auth";
import { redirect } from "react-router-dom";
import {useNotification} from "@/components/Notification";

const LoginPage = () => {
    const {signIn} = useAuth();
    const {notify} = useNotification();

    const onSubmit = ({username, password}) => {
        signIn({username, password})
            .then(user => {
                redirect("/dashboard");
            }).catch(err => {
                notify(err.message);
            });
    }

    return (
        <Login onSubmit={onSubmit} />
    );
}

export default LoginPage;