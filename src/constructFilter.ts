import { Filter } from 'mongodb';

export function constructFilter<T extends Record<TKey, any>, TKey extends keyof T>(propertyName: TKey, op?: '$in') {
    return function (...value: T[TKey][]): Filter<T> {
        const $v = value.length === 1 ? value[0] : value;
        return op != null ? ({ [op]: { [propertyName]: $v } }) : ({ [propertyName]: $v } as any);
    };
}
