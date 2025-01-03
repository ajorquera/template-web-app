import React, { FC, PropsWithChildren } from "react"

import Box,{ BoxProps } from "../Box"

export interface Props extends BoxProps {
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    style ?: React.CSSProperties;
    flexDirection?: 'row' | 'column';
    gap?: string | number;
    flexGrow?: number;
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

const Flex: FC<Props> = ({children,flexWrap, alignItems,flexGrow, justifyContent, flexDirection,gap, ...props}) => {
    return (
        <Box {...props} style={{...props.style, display: 'flex', flexWrap, flexDirection,flexGrow, alignItems,gap, justifyContent}} >
            {children}
        </Box>
    )
};

export default Flex;