import React, { FC, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    style ?: React.CSSProperties;
}

const Flex: FC<Props> = ({children, alignItems, justifyContent, style}) => {
    return (
        <div style={{...style, display: 'flex', alignItems, justifyContent}}>
            {children}
        </div>
    )
};

export default Flex;