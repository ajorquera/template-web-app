import { FC } from "react"
import Box, { BoxProps } from "../Box"
import React from "react";
import "./Text.css";

interface Props extends BoxProps {
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    fontSize?: string | number;
    fontWeight?: string | number;
    color?: string;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    htmlFor?: string;
}

const Text: FC<Props> = ({ children, textAlign, fontWeight,verticalAlign, fontSize, color, as="span", display="inline",  style,  ...props }) => {
    return <Box className="Text" {...props} style={{...style, textAlign,fontSize,display,verticalAlign, fontWeight, color}} as={as}>{children}</Box>
}

export default Text;

export {Props as TextProps };