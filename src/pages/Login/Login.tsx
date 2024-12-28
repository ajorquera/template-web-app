import React, { useState } from 'react';
import LoginForm  from './LoginForm';
import { signIn } from "aws-amplify/auth"
import { useAsync } from '../../hooks';
const Login = () => {
    const {execute, loading, error} = useAsync<any>(signIn, {autoRun: false});

    const onSubmit = (values: any) => {
        execute({
            username: values.username,
            password: values.password,
        });
    }
    return <LoginForm error={error?.message} onSubmit={onSubmit} loading={loading} />;
}

export default Login;