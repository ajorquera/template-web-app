export const pipe = <T = any>(...fns: Function[]) => (x) => fns.reduce<T>((v, f) => f(v), x);
export const copyObjSpread = (obj: any) => ({ ...obj }); 
