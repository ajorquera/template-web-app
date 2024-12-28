import { useState } from "react";
import RegisterForm from "./RegisterForm";
import React from "react";
import { signUp } from "aws-amplify/auth"

const Register = () => {
    const [loading, setLoading] = useState(false);
    const onSubmit = async (values) => {
        setLoading(true);
        const promise = signUp({
            username: values.email,
            password: values.password,
        });

        promise.finally(() => setLoading(false));
    }

    return <RegisterForm onSubmit={onSubmit} loading={loading} />;
};

export default Register;