import { FC } from 'react';

import Box, { BoxProps } from '../Box';

export interface Props extends BoxProps {

}

const innerStyle = {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: 'white',
}

/**
 * Card
 */
const Card: FC<Props> = ({children, style, ...props}) => {
    return (
        <Box style={{...innerStyle, ...style}} {...props}>
            {children}
        </Box>
    );
};

export default Card;