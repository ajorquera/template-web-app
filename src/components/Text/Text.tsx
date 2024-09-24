import React from "react";
import { FC, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
    fontSize?: number;
    display?: 'block' | 'inline-block' | 'inline';
}

const Text: FC<Props> = ({ children, fontSize, display }) => {
    return <span style={{fontSize, display}}>{children}</span>;
}

export default Text;