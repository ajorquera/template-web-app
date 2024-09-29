import { CSSProperties, FC, HTMLProps, PropsWithChildren } from "react"

export interface Props extends PropsWithChildren {
    width: number;
    height: number;
    backgroundColor: string;
    style?: CSSProperties;
    position?: 'absolute' | 'relative' | 'fixed';
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    zIndex?: number;
    display?: 'flex' | 'block' | 'inline-block' | 'inline-flex';
}

const Box: FC<Props> = ({style, children, ...props}) => {
    return <div style={{...props, ...style}}>{children}</div>
}

export default Box;