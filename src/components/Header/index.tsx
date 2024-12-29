import { FC } from 'react';
import Box, {BoxProps} from '../Box';
import React from 'react';

export interface Props extends BoxProps {
    height?: number;
}

/**
 * Header
 */
const Header: FC<Props> = ({children, height=100, ...props}) => {
    return (
        <>
            <Box bg="white" borderBottom='2px solid black' top={0} height={height} width="100%" position='fixed' {...props}>
                This is the header
            </Box>
            <div style={{height}}></div>
        </>
    );
};

export default Header;