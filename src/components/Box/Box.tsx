import React, { CSSProperties, FC, PropsWithChildren } from "react"

export interface Props extends PropsWithChildren {
    width?    : number | string;
    height?   : number | string;
    minWidth?    : number | string;
    minHeight?   : number | string;
    mt?       : number | string;
    style?    : React.CSSProperties;
    display?  : CSSProperties['display'];
    as?       : React.ElementType;
    className?: string;
    backgroundColor?: string;
    bg?: string;
    border?: string;

}

const Box: FC<Props> = ({width, height, display,border, as, mt, style, className,minHeight,backgroundColor,bg, minWidth, ...props}) => {
    const Component = as ?? 'div';
    return (
        <Component 
            className={className} 
            style={{
                width, 
                height, 
                border,
                display, 
                marginTop: 
                mt,
                minHeight,
                minWidth, 
                backgroundColor: bg ?? backgroundColor,
                ...style
            }} 
            {...props} />
    );
}

export default Box;