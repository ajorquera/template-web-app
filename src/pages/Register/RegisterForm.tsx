import React, { FC } from 'react';
import {RouterLink as Link, Card, Form,Text, Button, Flex, TextInputForm, regexVal} from '../../components';

interface Values {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface Props {
    onSubmit: (values: Values) => void;
    loading: boolean;
}

const confirmPasswordVal = (value, fieldsState) => {
    const passwordState = fieldsState['password'];
    return passwordState.isTouched ? value === passwordState.value: true;
}

const validationFields = {
    name: regexVal(/^[A-Za-z\s]+$/, 'Field must contain only letters'),
    email: regexVal(/\S+@\S+\.\S+$/, 'Field must be a valid email'),
    password: regexVal(/^\S{8,16}$/, 'Password must be between 8 and 16 characters'),
    confirmPassword: {validator: confirmPasswordVal, message: 'Passwords do not match' }
};

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const Register: FC<Props> = ({onSubmit, loading}) => {
    return (
        <Card display="inline-block" width={300}>
            <Text as="h2" display='block' textAlign="center">Register</Text>
            <Form initialValues={initialValues} onSubmit={onSubmit} validationFields={validationFields}>
                {({isInvalid, submmitCount}) => (
                    <>
                <Flex flexDirection="column" gap={10}>
                    <TextInputForm name="name" label="Name" />
                    <TextInputForm name="email" label="Email" />
                    <TextInputForm name="password" label="Password" type='password' />
                    <TextInputForm name="confirmPassword" label="Confirm Password" type='password' />
                </Flex>
                <Flex mt={20} gap={10} flexDirection='column'>
                    <Text display='block' textAlign='right'>
                        <Button bg='#292929' disabled={Boolean(loading || submmitCount && isInvalid)} color="white" border="none" type="submit">
                            {loading ? 'Loading...': 'Submit'}
                        </Button>
                    </Text>
                    <Text fontSize={12} display="block">Already have an account? <Link href="/login">Login</Link></Text>
                </Flex>
                </>
                )}
            </Form>
        </Card>
    );

}

export default Register;