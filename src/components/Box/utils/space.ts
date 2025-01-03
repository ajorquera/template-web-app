import { pipe, copyObjSpread, setPropValueFromPriority, removeUndefined, removeProps } from '../../../utils';
import { numbStr } from '../../../interfaces';


export interface MarginProps {
    margin?: numbStr;
    marginTop?: numbStr;
    marginRight?: numbStr;
    marginBottom?: numbStr;
    marginLeft?: numbStr;
    m?: numbStr;
    mt?: numbStr;
    mr?: numbStr;
    mb?: numbStr;
    ml?: numbStr;
    my?: numbStr;
    mx?: numbStr;
}

export const getMargin = (props: { style: MarginProps }) => {
    const style = pipe(
        setPropValueFromPriority('marginTop', ['marginTop', 'mt', 'my']),
        setPropValueFromPriority('marginRight', ['marginRight', 'mr', 'mx']),
        setPropValueFromPriority('marginBottom', ['marginBottom', 'mb', 'my']),
        setPropValueFromPriority('marginLeft', ['marginLeft', 'ml', 'mx']),
        setPropValueFromPriority('margin', ['margin', 'm']),
    )({ ...props });

    const newProps = removeProps(['marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'margin', 'mt', 'mr', 'mb', 'ml', 'my', 'mx'])(props);

    return { ...newProps, style: { ...props.style, ...style } };
}

export interface PaddingProps {
    padding?: numbStr;
    paddingTop?: numbStr;
    paddingRight?: numbStr;
    paddingBottom?: numbStr;
    paddingLeft?: numbStr;
    pt?: numbStr;
    pr?: numbStr;
    pb?: numbStr;
    pl?: numbStr;
    px?: numbStr;
    py?: numbStr;
    p?: numbStr;
}

export const getPadding = (props: { style: PaddingProps }) => {
    const style = pipe(
        setPropValueFromPriority('paddingTop', ['paddingTop', 'pt', 'py']),
        setPropValueFromPriority('paddingRight', ['paddingRight', 'pr', 'px']),
        setPropValueFromPriority('paddingBottom', ['paddingBottom', 'pb', 'py']),
        setPropValueFromPriority('paddingLeft', ['paddingLeft', 'pl', 'px']),
        setPropValueFromPriority('padding', ['padding', 'p'])
    )({ ...props });

    const newProps = removeProps(['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'padding', 'pt', 'pr', 'pb', 'pl', 'px', 'py'])(props);

    return { ...newProps, style: { ...props.style, ...style } };
}