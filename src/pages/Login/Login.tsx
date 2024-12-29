import React, { useEffect } from 'react';
import {AuthBaseForm, validationPatterns, Text, RouterLink, Box} from '../../components';
import { signIn } from "aws-amplify/auth"
import { useAsync } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const FORM_FIELDS = [
    {
        name: 'username',
        label: 'Email',
        validation: validationPatterns.email
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password'
    }
]

const Login = () => {
    const {execute, loading, error, value} = useAsync<any>(signIn, {autoRun: false});
    const navigate = useNavigate();
    const onSubmit = (values: any) => {
        execute({
            username: values.username,
            password: values.password,
        });
    };

    useEffect(() => {
        if(value && !error) {
            navigate("/dashboard");
        }
    }, [value, error]);
    return (
        <AuthBaseForm 
            sso={[{provider: 'Google', opts: {}}, {provider: 'Apple', opts: {}}]}
            title='Login' 
            formFields={FORM_FIELDS} 
            error={error?.message} 
            onSubmit={onSubmit} 
            loading={loading} 
            footer={(
                <Text as="div" textAlign="right">
                    <Text as="div" fontSize={12}>Don't have an account? <RouterLink href="/register">Register</RouterLink></Text>
                    <Text as="div" fontSize={12}><RouterLink href="/forgot-password">Forgot your password?</RouterLink></Text>
                </Text>
            )}
        />
        );
}

export default Login;