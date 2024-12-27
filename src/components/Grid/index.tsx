import { FC } from "react";
import Box, {BoxProps} from "../Box";
import React from "react";

interface Props extends BoxProps {
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridTemplateAreas?: string;
    gridArea?: string;
    gridRow?: string;
    gridColumn?: string;
    gridAutoFlow?: string;
    gridAutoColumns?: string;
    gridAutoRows?: string;
    gridGap?: string;
    gridRowGap?: string;
}

const Grid: FC<Props> = ({ ...props}) => {
    return <Box display="grid" {...props} />
};

export default Grid;