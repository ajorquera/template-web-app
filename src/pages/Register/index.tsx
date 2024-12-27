import { useState } from "react";
import RegisterForm from "./RegisterForm";
import React from "react";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const onSubmit = (values) => {
        setLoading(true);
        
    }

    return <RegisterForm onSubmit={onSubmit} loading={loading} />;
};

export default Register;