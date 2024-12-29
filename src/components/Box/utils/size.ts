import { numbStr } from '../../../interfaces';
import { removeUndefined } from '../../../utils';

export interface SizeProps {
    width?: numbStr;
    w?: numbStr;
    height?: numbStr;
    h?: numbStr;
    minWidth?: numbStr;
    minW?: numbStr;
    minH?: numbStr;
    minHeight?: numbStr;
    top?: numbStr;
    bottom?: numbStr;
    left?: numbStr;
    right?: numbStr;
    maxWidth?: numbStr;
    maxH?: numbStr;
    maxW?: numbStr;
    maxHeight?: numbStr;
}

export const getSize = ({ width, w, height, h, minWidth, minW, minH, minHeight, ...props }: SizeProps) => {
    const sizeProps = removeUndefined({
        width: width ?? w,
        height: height ?? h,
        minWidth: minWidth ?? minW,
        minHeight: minHeight ?? minH
    });

    return { ...sizeProps, ...props };
}