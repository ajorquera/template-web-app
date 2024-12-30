import React, { CSSProperties, ElementType, FC, PropsWithChildren } from "react"
import { getMargin, getPadding, getSize,getLayout, getBorder, MarginProps, PaddingProps, SizeProps, BorderProps, LayoutProps } from "./utils";
import { copyObjSpread, pipe, removeUndefined } from "../../utils";

export interface Props extends PropsWithChildren, MarginProps, PaddingProps, SizeProps, BorderProps, LayoutProps {
    style?    : CSSProperties;
    display?  : CSSProperties['display'];
    as?       : ElementType;
}

const Box: FC<Props> = ({as, style, ...props}) => {
    const styleProps = pipe<Props>(
        copyObjSpread, 
        getMargin, 
        getPadding, 
        getSize, 
        getBorder, 
        getLayout, 
        removeUndefined
    )(props);

    const Component = as ?? 'div';
    return (
        <Component 
            style={{
                ...styleProps,
                ...style
            }} 
            {...props} 
        />
    );
}

export default Box;