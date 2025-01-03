import { CSSProperties } from "react";
import { pipe, removeProps, setPropValueFromPriority } from "../../../utils";

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

export const getBorder = (props: { style: BorderProps }) => {
    const style = pipe(
        setPropValueFromPriority('borderTop', ['borderTop', 'borderY']),
        setPropValueFromPriority('borderRight', ['borderRight', 'borderX']),
        setPropValueFromPriority('borderBottom', ['borderBottom', 'borderY']),
        setPropValueFromPriority('borderLeft', ['borderLeft', 'borderX']),
    )({ ...props });

    const newProps = removeProps(['borderTop', 'borderRadius', 'borderRight', 'borderBottom', 'borderLeft', 'borderY', 'borderX'])(style);

    return { ...newProps, style: { ...props.style, ...style } };
}