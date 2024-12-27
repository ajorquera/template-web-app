import { AnchorHTMLAttributes, FC } from "react";
import "./Link.css";
import Text, { TextProps } from "../Text";
import React from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, TextProps {

}

const Link: FC<Props> = ({ children, ...props }) => {
    return <Text className="Link" as="a" {...props}>{children}</Text>
}

export default Link;
export {Props as LinkProps};