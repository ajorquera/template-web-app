import { FC, ReactNode, useState } from 'react';
import Card, {Props as CardProps} from '../Card/Card';

import Text from '../Text';
import Form, {TextInputForm, validateObj} from '../Form';
import Box from '../Box';
import Flex from '../Flex';
import Button from '../Button';
import SSOButton from '../SSOButton';
import React from 'react';
import GoogleSVG from '../../assets/icons/google.svg?react';
import AppleSVG from '../../assets/icons/apple.svg?react';


export interface FormField {
    name: string;
    label?: string;
    type?: string;
    value?: string;
    validation?: validateObj;
}

export interface SSOOption {
    provider: 'Apple' | 'Google' | 'Facebook';
    opts: Record<string, string>;
}

export interface Props extends CardProps {
    onSubmit: (values: any) => void;
    loading?: boolean;
    error?: string;
    formFields: FormField[];
    title: string;
    footer?: ReactNode
    description?: ReactNode
    sso?: SSOOption[]
}

const getFormProps = (formFields: FormField[]) => {
    const initialValues = {};
    const validationFields = {};

    formFields.forEach(field => {
        initialValues[field.name] = field.value ?? '';
        if(field.validation) {
            validationFields[field.name] = field.validation;
        }
    });

    return {initialValues, validationFields};
}

/**
 * AuthBaseForm
 */
const AuthBaseForm: FC<Props> = ({onSubmit, loading, error, formFields, title, footer, description,sso, ...props}) => {
    const [formProps] = useState(getFormProps(formFields));

    return (
        <Card elevation={5} display="inline-block" width={300} {...props}>
            <Text as="h2" display='block' textAlign="center">{title}</Text>
            {description}
            
            <Form {...formProps} onSubmit={onSubmit}>
                {({isInvalid, submmitCount}) => (
                    <>
                <Flex flexDirection="column" gap={10}>
                    {formFields.map((field) => (
                        <TextInputForm key={field.name} {...field} />
                    ))}
                </Flex>
                <Flex mt={20} gap={10} flexDirection='column'>
                    {error && <Text fontSize={12} fontWeight="bold" color='red' display='block'>{error}</Text>}
                    <Text display='block' textAlign='right'>
                        <Button bg='#292929' disabled={Boolean(loading || (submmitCount && isInvalid))} color="white" border="none" type="submit">
                            {loading ? 'Loading...': 'Submit'}
                        </Button>
                    </Text>
                </Flex>
                </>
                )}
            </Form>
            <Box>
                {sso && <Flex my={10} flexDirection='column' gap={10}>
                    <Text fontSize={12} fontWeight="bold" textAlign='center'>
                        - OR - 
                    </Text>
                    {sso.map(({provider, opts}, i) => {
                        let node:ReactNode = null;
                        
                        if(provider === 'Apple') {
                            node = <SSOButton key={i} icon={AppleSVG} {...opts} >Sign in for Apple</SSOButton>
                        } else if(provider === 'Google') {
                            node = <SSOButton key={i} icon={GoogleSVG} {...opts}>Sign in for Google</SSOButton>;
                        }

                        return node
                    })}
                </Flex>}
                {footer}
            </Box>
        </Card>
    );
};

export default AuthBaseForm;