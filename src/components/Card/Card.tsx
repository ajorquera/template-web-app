

import React, { FC } from 'react';
import Box, { BoxProps } from '../Box';

export interface Props extends BoxProps {
    elevation?: number;
}

/**
 * Card
 */
const Card: FC<Props> = ({elevation=1, ...props}) => {
    const amount = elevation*2;

    const boxShadow = `${amount}px ${amount}px 0px 0px rgba(0, 0, 0, 1)`;

    return (
        <Box border=".5px solid black" p="1.5rem" className='Card'  {...props} style={{boxShadow, ...props.style}} />
    );
};

export default Card;