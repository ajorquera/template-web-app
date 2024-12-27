import React from 'react';
import LoginForm  from './LoginForm';

const Login = () => {
    const onSubmit = (values: any) => {
        setLoading(true);
    }
    const [loading, setLoading] = React.useState(false);
    return <LoginForm onSubmit={onSubmit} loading={loading} />;
}

export default Login;