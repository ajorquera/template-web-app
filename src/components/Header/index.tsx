import { FC } from 'react';
import Box, {BoxProps} from '../Box';
import React from 'react';
import Flex from '../Flex';
import Text from '../Text';

export interface Props extends BoxProps {
    height?: number;
}

/**
 * Header
 */
const Header: FC<Props> = ({children, height=100, ...props}) => {
    return (
        <Box {...props}>
            <Flex px={10} justifyContent='space-between' alignItems='center' bg="white" borderBottom='2px solid black' top={0} height={height} width="100%" position='fixed' {...props}>
                <Text as="h2">
                    My Finances
                </Text>
                <Box>
                    [ ]
                </Box>
            </Flex>
            <div style={{height}}>nbsp;</div>
        </Box>
    );
};

export default Header;