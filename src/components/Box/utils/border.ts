import { removeUndefined } from "../../../utils";

export interface BorderProps {
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    borderBottom?: string;
    borderY?: string;
    borderX?: string;
}

export const getBorder = ({ border, borderLeft, borderRight, borderY, borderX, borderTop, borderBottom, ...props }: BorderProps) => {
    const borderProps = removeUndefined({
        border,
        borderLeft: borderLeft ?? borderX,
        borderRight: borderRight ?? borderX,
        borderTop: borderTop ?? borderY,
        borderBottom: borderBottom ?? borderY
    });

    return { ...props, ...borderProps };
}