import { FC } from 'react';
import Button, {Props as ButtonProps} from './Button/Button';
import Flex from './Flex';
import Text from './Text';
import React from 'react';

interface IconProps {
    height: number;
    width: number;
}

export interface Props extends ButtonProps {
    icon: FC<IconProps>;   
}

/**
 * SSOButton
 */
const SSOButton: FC<Props> = ({children,icon, ...props}) => {
    const Icon = icon;
    return (
        <Button borderRadius={8} fullWidth {...props}>
            <Flex alignItems='center' gap={10} justifyContent='center'>
                <Icon height={24} width={24} />
                <Text fontWeight='bold'>
                    {children}          
                </Text>
            </Flex>
        </Button>
    );
};

export default SSOButton;