import React, { FC, PropsWithChildren } from "react"

export interface Props extends PropsWithChildren {
    width?: number | string;
    height?: number | string;
    style ?: React.CSSProperties;
}

const Box: FC<Props> = ({width, height, style, children}) => {
    return <div style={{width, height, ...style}}>{children}</div>
}

export default Box;