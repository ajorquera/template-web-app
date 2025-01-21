import { FC } from 'react';
import Box, {BoxProps} from '../Box';
import React from 'react';

export interface Props extends BoxProps {

}

/**
 * Page
 */
const Page: FC<Props> = ({children, ...props}) => {
    return (
        <Box py="5%" margin="auto 10%" {...props}>
            {children}
        </Box>
    );
};

export default Page;