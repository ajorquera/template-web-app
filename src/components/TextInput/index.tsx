import './TextInput.css';

import React, { ReactNode, useId } from 'react';
import { FC } from 'react';
import Box, { BoxProps } from '../Box';
import Text from '../Text';
import Input, {InputProps} from '../Input';

export interface Props extends InputProps {
    label?: ReactNode
    error?: ReactNode
    boxProps?: BoxProps
}

/**
 * TextInput
 */
const TextInput: FC<Props> = ({ label, error, ...props}) => {
    const id = useId();
    return (
        <Box className="TextInput" display="inline-block" {...props.boxProps}>
            <Text as="label" htmlFor={id}>
                <Text fontWeight="bold" display='block' fontSize={12}>{label}</Text>
                <Input id={id} width="100%" {...props}/>
            </Text>
            <Text display='block' color='red' fontWeight="bold" verticalAlign="top" fontSize={8}>{error ?? ' '}</Text>
        </Box>
    );
};

export default TextInput;
export { Props as TextInputProps };