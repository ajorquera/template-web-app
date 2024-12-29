import React, { CSSProperties, FC, PropsWithChildren } from "react"
import { getMargin, getPadding, getSize, getBorder, MarginProps, PaddingProps, SizeProps, BorderProps } from "./utils";
import { pipe } from "../../fn";

export interface Props extends PropsWithChildren, MarginProps, PaddingProps, SizeProps, BorderProps {
    style?    : React.CSSProperties;
    display?  : CSSProperties['display'];
    as?       : React.ElementType;
    className?: string;
    backgroundColor?: string;
    bg?: string;
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderY?: string;
    position?: 'absolute' | 'relative' | 'fixed';
}

const Box: FC<Props> = ({display, position,as, style, className,backgroundColor,bg, ...props}) => {
    const styleProps = pipe(getMargin, getPadding, getSize, getBorder)(props);

    const Component = as ?? 'div';
    return (
        <Component 
            className={className} 
            style={{
                position,
                display, 
                backgroundColor: bg ?? backgroundColor,
                ...styleProps,
                ...style
            }} 
            {...props} />
    );
}

export default Box;