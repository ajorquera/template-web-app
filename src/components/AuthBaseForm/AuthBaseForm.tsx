import { FC, ReactNode, useState } from 'react';
import Card, {Props as CardProps} from '../Card';

import Text from '../Text';
import Form, {TextInputForm, validateObj} from '../Form';
import Flex from '../Flex';
import Button from '../Button';
import React from 'react';

export interface FormField {
    name: string;
    label?: string;
    type?: string;
    value?: string;
    validation?: validateObj;
}

export interface Props extends CardProps {
    onSubmit: (values: any) => void;
    loading?: boolean;
    error?: string;
    formFields: FormField[];
    title: string;
    footer?: ReactNode
    description?: ReactNode
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
const AuthBaseForm: FC<Props> = ({onSubmit, loading, error, formFields, title, footer, description, ...props}) => {
    const [formProps] = useState(getFormProps(formFields));

    return (
        <Card display="inline-block" width={300} {...props}>
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
                    {footer}
                </Flex>
                </>
                )}
            </Form>
        </Card>
    );
};

export default AuthBaseForm;