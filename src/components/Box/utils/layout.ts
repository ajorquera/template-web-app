import { CSSProperties } from "react";
import { copyObjSpread, pipe, setPropValueFromPriority } from "../../../utils";

export interface LayoutProps extends Pick<CSSProperties, 'display' | 'position'> { }

export const getLayout = (props: LayoutProps) => {
    const layoutProp = pipe(
        copyObjSpread,
        setPropValueFromPriority('backgroundColor', ['backgroundColor', 'bg']),
    )(props);

    return layoutProp;
}