import React, { FC } from 'react';
import Link from '../../components/RouterLink';
import Card from '../../components/Card';
import Form, {TextInputForm} from '../../components/Form';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Flex from '../../components/Flex';
import { regexVal, validationPatterns } from '../../components/Form/validators';

interface Values {
    username: string;
    password: string;
}

interface Props {
    onSubmit: (values: Values) => void;
    loading: boolean;
    error?: string;
}

const validationFields = {
    username: validationPatterns.email,
    password: validationPatterns.password
};

const initialValues = {
    username: '',
    password: '',
};

const LoginForm: FC<Props> = ({onSubmit, loading, error}) => {
    return (
        <Card display="inline-block" width={300}>
            <Text as="h2" display='block' textAlign="center">Login</Text>
            <Form initialValues={initialValues} onSubmit={onSubmit} validationFields={validationFields}>
                {({isInvalid, submmitCount}) => (
                    <>
                <Flex flexDirection="column" gap={10}>
                    <TextInputForm name="username" label="Username" />
                    <TextInputForm name="password" label="Password" type='password' />
                </Flex>
                <Flex mt={20} gap={10} flexDirection='column'>
                    {error && <Text fontSize={12} fontWeight="bold" color='red' display='block'>{error}</Text>}
                    <Text display='block' textAlign='right'>
                        <Button bg='#292929' disabled={Boolean(loading || (submmitCount && isInvalid))} color="white" border="none" type="submit">
                            {loading ? 'Loading...': 'Submit'}
                        </Button>
                    </Text>
                    <Text fontSize={12} display="block">Don't have an account? <Link href="/register">Register</Link></Text>
                </Flex>
                </>
                )}
            </Form>
        </Card>
    );

}

export default LoginForm;