import { FC } from 'react';
import Box, {BoxProps} from '../Box';
import React from 'react';

export interface Props extends BoxProps {

}

/**
 * Sidebar
 */
const Sidebar: FC<Props> = ({children, ...props}) => {
    return (
        <Box borderRight='2px solid black' {...props}>
            Sidebar
        </Box>
    );
};

export default Sidebar;