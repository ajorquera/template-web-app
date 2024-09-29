import { FC, PropsWithChildren } from "react"
import Box from "../Box/Box"

interface Props extends PropsWithChildren {
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    style ?: React.CSSProperties;
}

const Flex: FC<Props> = ({children, ...props}) => {
    return (
        <Box display="flex" alignItems="center" {...props}>
            {children}
        </Box>
    )
};

export default Flex;