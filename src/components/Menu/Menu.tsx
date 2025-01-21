import { FC } from "react";
import MenuItem, {Props as MenuItemProps} from "./MenuItem";
import React from "react";
import './Menu.css';
import Box, {BoxProps} from "../Box";

export interface Props extends BoxProps {
    items: MenuItemProps[]
    bg?: BoxProps['bg']
    hoverColor?: MenuItemProps['hoverColor']
}

const Menu: FC<Props> = ({items,bg, hoverColor, ...props}) => {
    return (
        <Box as="ul" className="Menu" {...props}>
            {items.map((item, index) => (
                <MenuItem hoverColor={hoverColor} bg={bg} key={index} {...item} />
            ))}
        </Box>
    )
}

export default Menu;