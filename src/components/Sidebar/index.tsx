import { FC, Fragment } from 'react';
import Box, {BoxProps} from '../Box';
import React from 'react';

interface Item {
    label: string
    icon?: string
    href?: string
}

export interface Props extends BoxProps {
    items: Item[]
}

/**
 * Sidebar
 */
const Sidebar: FC<Props> = ({children, items, ...props}) => {
    return (
        <Box p={10} borderRight='2px solid black' {...props}>
            {items?.map((item, index) => (
                <Fragment key={index}>
                    {item.label}
                </Fragment>
            ))}
        </Box>
    );
};

export default Sidebar;