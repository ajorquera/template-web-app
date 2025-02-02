import { useEffect } from "react";
import React from "react";
import { signUp } from "aws-amplify/auth"
import { AuthBaseForm, RouterLink, Text, validationPatterns } from "../../components";
import { useAsync } from "../../hooks";
import { useNavigate } from "react-router-dom";

const confirmPasswordVal = (value, fieldsState) => {
    const passwordState = fieldsState['password'];
    return passwordState.isTouched ? value === passwordState.value: true;
}

const FORM_FIELDS = [
    {
        name: 'username',
        label: 'Email',
        validation: validationPatterns.email,
        autoComplete: 'email'
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        validation: validationPatterns.required,
        autoComplete: 'current-password'
    },
    {
        name: 'repeatPassword',
        label: 'Confirm Password',
        type: 'password',
        validation: {
            validator: confirmPasswordVal,
            message: 'Passwords do not match'
        },
        autoComplete: 'current-password'
    }
];

const Register = () => {
    const {execute, loading, error, value} = useAsync<any>(signUp, {autoRun: false});
    const navigate = useNavigate();
    const onSubmit = (values: any) => {
        execute({
            username: values.username,
            password: values.password,
        });
    };

    useEffect(() => {
        if(value && !error) {
            navigate("/login");
        }
    }, [value, error]);

    return  (<AuthBaseForm 
        title='Register' 
        formFields={FORM_FIELDS} 
        error={error?.message} 
        onSubmit={onSubmit} 
        loading={loading} 
        footer={
            <Text 
                as="div" 
                textAlign="right" 
                fontSize={12}
            >
                Already have an account? <RouterLink href="/login">Login</RouterLink>
            </Text>
        }
/>);
};

export default Register;