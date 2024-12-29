import { FC } from 'react';
import Flex, {FlexProps} from './Flex';
import Text from './Text';
import Card, {Props as CardProps} from './Card';
import React from 'react';

export interface Props extends CardProps {
    title: string;
}

/**
 * Message
 */
const Message: FC<Props> = ({children,title, ...props}) => {
    return (
        <Card {...props}>
            <Flex flexDirection='column' alignItems='center' justifyContent='center'>
                <Text as="h2">{title}</Text>
                {children}
            </Flex>
        </Card>
    );
};

export default Message;