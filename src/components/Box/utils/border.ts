import { CSSProperties } from "react";
import { pipe, setPropValueFromPriority } from "../../../utils";

export interface BorderProps {
    border?: CSSProperties['border'];
    borderTop?: CSSProperties['borderTop'];
    borderRight?: CSSProperties['borderRight'];
    borderBottom?: CSSProperties['borderBottom'];
    borderLeft?: CSSProperties['borderLeft'];
    borderY?: CSSProperties['borderTop'];
    borderX?: CSSProperties['borderRight'];
    borderRadius?: CSSProperties['borderRadius'];
    borderWidth?: CSSProperties['borderWidth'];
    borderStyle?: CSSProperties['borderStyle'];
    borderColor?: CSSProperties['borderColor'];
}

export const getBorder = (props: BorderProps) => {
    const borderProps = pipe(
        setPropValueFromPriority('borderTop', ['borderTop', 'borderY']),
        setPropValueFromPriority('borderRight', ['borderRight', 'borderX']),
        setPropValueFromPriority('borderBottom', ['borderBottom', 'borderY']),
        setPropValueFromPriority('borderLeft', ['borderLeft', 'borderX']),
    )(props);

    return borderProps;
}