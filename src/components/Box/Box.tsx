import { getMargin, getPadding, getSize,getLayout, getBorder, MarginProps, PaddingProps, SizeProps, BorderProps, LayoutProps } from "./utils";
import React, { CSSProperties, ElementType, EventHandler, FC, MouseEvent, PropsWithChildren } from "react"
import { pipe } from "../../utils";

export interface Props extends PropsWithChildren, MarginProps, PaddingProps, SizeProps, BorderProps, LayoutProps {
    style?    : CSSProperties;
    display?  : CSSProperties['display'];
    as?       : ElementType;
    className?: string;
    onClick?  : EventHandler<MouseEvent>;
}

const Box: FC<Props> = ({as, style, ...props}) => {
    const newProps = pipe<Props>(
        getMargin, 
        getPadding, 
        getSize, 
        getBorder, 
        getLayout, 
    )(props);

    const Component = as ?? 'div';
    return (
        <Component 
            {...newProps} 
            style={{
                ...newProps.style,
                ...style
            }} 
        />
    );
}

export default Box;