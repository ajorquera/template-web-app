import { FC } from 'react';
import Card, {Props as CardProps} from '../Card';
import React from 'react';
import Flex from '../../Flex';
import Text from '../../Text';
import Box from '../../Box';

export interface Props extends CardProps {
    logoUrl: string
    name: string
}

/**
 * ProviderCard
 */
const ProviderCard: FC<Props> = ({name,logoUrl, ...props}) => {
    const style = {
        ...props.style,
        ...(props.onClick ? {cursor: 'pointer'} : {})
    }

    return (
        <Card p={0} {...props} style={style}>
            <Flex alignItems='center' flexDirection='column'>
                <img style={{width: "100%", height: '100%'}} src={logoUrl} />
                <Box width="100%" p={10} borderTop="1px solid black">
                    <Text textAlign='center' as="h3">{name}</Text>
                </Box>
            </Flex>
        </Card>
    );
};

export default ProviderCard;