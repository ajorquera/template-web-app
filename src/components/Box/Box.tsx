import React, { CSSProperties, ElementType, FC, PropsWithChildren } from "react"
import { getMargin, getPadding, getSize,getLayout, getBorder, MarginProps, PaddingProps, SizeProps, BorderProps, LayoutProps } from "./utils";
import { copyObjSpread, pipe, removeUndefined, removeProps } from "../../utils";

export interface Props extends PropsWithChildren, MarginProps, PaddingProps, SizeProps, BorderProps, LayoutProps {
    style?    : CSSProperties;
    display?  : CSSProperties['display'];
    as?       : ElementType;
    className?: string;
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