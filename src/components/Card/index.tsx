import React, { FC } from 'react';

import Box, { BoxProps } from '../Box';

export interface Props extends BoxProps {

}

const style = {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: 'white',
    width: '100%'
}

/**
 * Card
 */
const Card: FC<Props> = ({children, ...props}) => {
    return (
        <Box style={style} {...props}>
            {children}
        </Box>
    );
};

export default Card;