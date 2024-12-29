import { removeUndefined } from '../../../utils';
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

export const getMargin = ({ m, margin, marginTop, marginRight, marginBottom, marginLeft, my, mx, mt, mr, mb, ml, ...props }: MarginProps) => {
    const marginProps = removeUndefined({
        marginTop: marginTop ?? mt ?? my,
        marginRight: marginRight ?? mr ?? mx,
        marginBottom: marginBottom ?? mb ?? my,
        marginLeft: marginLeft ?? ml ?? mx,
        margin: margin ?? m
    });

    return { ...props, ...marginProps };
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
    p?: numbStr;
}

export const getPadding = (props: PaddingProps) => {
    const { padding, paddingTop, paddingRight, paddingBottom, paddingLeft, pt, pr, pb, pl, p } = props;

    const paddingProps = removeUndefined({
        padding: padding ?? p,
        paddingTop: paddingTop ?? pt,
        paddingRight: paddingRight ?? pr,
        paddingBottom: paddingBottom ?? pb,
        paddingLeft: paddingLeft ?? pl
    });

    return { ...props, ...paddingProps };
}