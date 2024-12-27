import './Card.css';

import React, { FC } from 'react';
import Box, { BoxProps } from '../Box';

export interface Props extends BoxProps {

}

/**
 * Card
 */
const Card: FC<Props> = (props) => {
    return (
        <Box className='Card' {...props} />
    );
};

export default Card;