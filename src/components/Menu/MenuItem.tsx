import React, { CSSProperties, PropsWithChildren } from "react";
import { FC } from "react";
import Box, { BoxProps } from "../Box";
import './MenuItem.css'

export interface Props extends BoxProps {
    hoverColor: CSSProperties['color']
}

const getOnHover = (props: Props) => {
    return ({...props, '&:hover:': props.hoverColor})
};

const MenuItem: FC<Props> = ({...props}) => {
    const style = getOnHover(props);
    return <Box className="MenuItem" as="li" {...props} style={style}/>
}

export default MenuItem;