import { FC, useEffect, useState } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';import { useAsync } from '../../hooks';
import { resetPassword } from "aws-amplify/auth"
import React from 'react';

type pageState = ''

/**
 * ForgotPassword
 */
const ForgotPassword: FC = () => {
    const [state, setState] = useState();
    
    const {execute, loading, error, value} = useAsync<any>(resetPassword, {autoRun: false});

    const onSubmit = (values) => {
        execute({username: values.email});
    };

    useEffect(() => {
        if (value) {
            alert('Password reset email sent');
        }
    }, [value]);

    return (
        <ForgotPasswordForm onSubmit={onSubmit} loading={loading} error={error?.message} />
    );
};

export default ForgotPassword;