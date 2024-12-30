import { pipe, copyObjSpread, setPropValueFromPriority } from '../../../utils';
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

export const getMargin = (props: MarginProps) => {
    const marginProps = pipe(
        copyObjSpread,
        setPropValueFromPriority('marginTop', ['marginTop', 'mt', 'my']),
        setPropValueFromPriority('marginRight', ['marginRight', 'mr', 'mx']),
        setPropValueFromPriority('marginBottom', ['marginBottom', 'mb', 'my']),
        setPropValueFromPriority('marginLeft', ['marginLeft', 'ml', 'mx']),
        setPropValueFromPriority('margin', ['margin', 'm'])
    )(props);

    return marginProps
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

export const getPadding = (props: PaddingProps) => {
    const paddingProps = pipe(
        copyObjSpread,
        setPropValueFromPriority('paddingTop', ['paddingTop', 'pt', 'py']),
        setPropValueFromPriority('paddingRight', ['paddingRight', 'pr', 'px']),
        setPropValueFromPriority('paddingBottom', ['paddingBottom', 'pb', 'py']),
        setPropValueFromPriority('paddingLeft', ['paddingLeft', 'pl', 'px']),
        setPropValueFromPriority('padding', ['padding', 'p'])
    )(props);

    return paddingProps;
}