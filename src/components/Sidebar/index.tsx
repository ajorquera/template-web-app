import { FC, useMemo } from 'react';
import Box, {BoxProps} from '../Box';
import Text from '../Text'
import Link from '../Link'
import React from 'react';

import Menu from '../Menu'

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

    const innerItems = useMemo(() => items.map(item => {
        const children = item.href ? <Link width="100%" display='block' href={item.href}>{item.label}</Link> : <Text>{item.label}</Text>;

        return {
            ...item, 
            children
        };
    }), [items]);

    return (
        <Box borderRight='2px solid black' {...props}>
            <Menu items={innerItems} />
        </Box>
    );
};

export default Sidebar;