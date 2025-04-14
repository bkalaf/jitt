export function isNullOrEmpty(str?: string | any[]) {
    return str == null || str.length === 0;
}
export function inverse<T extends any[]>(predicate: IPredicate<T>) {
    return (...args: T) => !predicate(...args);
}
export const isNotNullOrEmpty = inverse(isNullOrEmpty);
export function addPrefix(prefix: string) {
    return (value?: string) => {
        if (value == null || isNullOrEmpty(value)) {
            return '';
        }
        return value.startsWith(prefix) ? value : [prefix, value].join('');
    };
}
export function surround(left: string, right: string) {
    return (middle: string | number) =>
        [left, typeof middle ? middle.toString() : middle, right].join('');
}
export const surroundQuotes = surround("'", "'");
export const surroundDoubleQuotes = surround('"', '"');
export const surroundParens = surround('(', ')');
