import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useAsync } from '../hooks';
import { AuthBaseForm, validationPatterns, Text, RouterLink, Message } from '../components';
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth';
import React from 'react';

export interface Props {

}

const FORGOT_PASSWORD_FIELDS = [
    {
        name: 'username',
        label: 'Email',
        validation: validationPatterns.email
    }
]

const RESET_PASSWORD_FIELDS = [
    {
        name: 'password',
        type: 'password',
        validation: validationPatterns.password
    }
]

type forgotPasswordState = 'forgot-password' | 'reset-password' | 'success' | 'error' | 'redirect-login';

/**
 * ForgotPassword
 */
const ForgotPassword = () => {
    const [searchParams] = useSearchParams();
    const verificationCode = searchParams.get('code');
    const [state, setState] = useState<forgotPasswordState>(verificationCode ? 'reset-password': 'forgot-password');
    
    
    const resetAsync = useAsync(resetPassword, {autoRun: false});
    const confirmResetAsync = useAsync(confirmResetPassword, {autoRun: false});
    
    const loading = resetAsync.loading || confirmResetAsync.loading;
    const error = resetAsync.error || confirmResetAsync.error;


    useEffect(() => {
        if(verificationCode) {
            setState('reset-password');
        }
    }, [verificationCode]);

    useEffect(() => {
        if(resetAsync.data) {
            setState('success');
        }
    }, [resetAsync]);

    useEffect(() => {
        if(confirmResetAsync.data) {
            setState('redirect-login');
        }
    }, [confirmResetAsync]);



    let node: ReactNode = null;
    if(state === 'forgot-password') { 
        node = <AuthBaseForm 
            title='Forgot Password' 
            formFields={FORGOT_PASSWORD_FIELDS} 
            error={error?.message} 
            onSubmit={resetAsync.execute} 
            loading={loading} 
            footer={(<Text as="div" fontSize={12} textAlign='right'><Text>Go back to <RouterLink href="/register">login</RouterLink></Text></Text>)}
        />
    } else if (state === 'reset-password') {
        node = <AuthBaseForm 
            description='Please enter your new password'
            title='Reset Password' 
            formFields={RESET_PASSWORD_FIELDS} 
            error={error?.message} 
            onSubmit={(values) => {
                confirmResetAsync.execute({
                    username: searchParams.get('username'),
                    newPassword: values.password,
                    confirmationCode: verificationCode
                });
            }} 
            loading={loading} 
            footer={(<Text as="div" fontSize={12} textAlign='right'><Text>Go back to <RouterLink href="/register">login</RouterLink></Text></Text>)}
        />;
    } else if (state === 'success') {
        node = <Message title='Success'>
            Request has been succefully send
            <Text fontSize={12}>Go back to <RouterLink href="/login">login</RouterLink></Text>
        </Message>;
    } else if (state === 'error') {
        node = <Message title="Error">
            {error?.message}
        </Message>
    } else if (state === 'redirect-login') {
        node = <Navigate to="/login" />;
    }

    return node;
}

export default ForgotPassword;