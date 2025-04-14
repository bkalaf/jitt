import { surroundDoubleQuotes } from '../common/addPrefix';

export function checkUndef<T>(name: string, value?: T) {
    if (value == null) return [];
    const [func1, func2] =
        (typeof value === 'string'
            ? [surroundDoubleQuotes, surroundDoubleQuotes]
            : typeof value === 'number'
            ? [surroundDoubleQuotes, (x: number) => x.toString()]
            : typeof value === 'object'
            ? [surroundDoubleQuotes, x => JSON.stringify(x)]
            : [(x: any) => x, (x: any) => x]) as [(x: string) => string, (x: any) => string];
    return [[func1(name), func2(value)]]
}