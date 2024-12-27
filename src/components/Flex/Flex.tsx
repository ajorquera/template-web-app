import React, { FC, PropsWithChildren } from "react"

import Box,{ BoxProps } from "../Box"

interface Props extends BoxProps {
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    style ?: React.CSSProperties;
    flexDirection?: 'row' | 'column';
    gap?: string | number;
}

const Flex: FC<Props> = ({children, alignItems, justifyContent, flexDirection,gap, ...props}) => {
    return (
        <Box {...props} style={{...props.style, display: 'flex', flexDirection, alignItems,gap, justifyContent}} >
            {children}
        </Box>
    )
};

export default Flex;