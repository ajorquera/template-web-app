export { default as removeUndefined } from './removeUndef';
export * from './fp';
export { default as setPropValueFromPriority } from './setPropValueFromPriority';

export const removeProps = (keys: string[]) => (obj: Record<string, any>) => {
    const copy = { ...obj };
    keys.forEach(key => delete copy[key]);
    return copy;
}