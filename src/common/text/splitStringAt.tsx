///<reference path="./../../global.d.ts" />
export function splitStringAt(predicate: IPredicate<[string]>, keep = false) {
    return function inner(arr: string[], accum: string[][] = [], current: string[] = []) {
        if (arr.length === 0) return [...accum, current].map(x => x.join(''));
        const [head, ...tail] = arr;
        if (predicate(head)) {
            return inner(tail, [...accum, current], keep ? [head] : []);
        }
        return inner(tail, accum, [...current, head]);
    }
}

export function rangeBetween(start: number, end: number): number[] {
    if (start > end) return [];
    if (start === end) return [start];
    return [start, ...rangeBetween(start + 1, end)]
}

export function charCodesBetween(start: string, end: string) {
    return rangeBetween(start.charCodeAt(0), end.charCodeAt(0));
}
const isUpper = (s: string) => charCodesBetween('A', 'Z').includes(s.charCodeAt(0));

export function capitalize(str: string) {
    if (str == null || str === '') return '';
    return [str[0].toUpperCase(), ...str.slice(1)].join('');
}
export function decapitalize(str: string) {
    if (str == null || str === '') return '';
    return [str[0].toLowerCase(), ...str.slice(1)].join('');
}
export function camelCaseToProper(str: string) {
    if (str == null || str.length === 0) return '';
    return splitStringAt(isUpper, true)(str.split('')).map(capitalize).join(' ')
}
export function kebabToCamelCase(str: string) {
    if (str == null || str.length === 0) return '';
    return decapitalize(str.split('-').map(capitalize).join(''));
}
export function toProper(str: string) {
    return camelCaseToProper(kebabToCamelCase(str));
}

console.log(camelCaseToProper('brand'))
console.log(camelCaseToProper('mercariBrand'));
console.log(camelCaseToProper('suggestedRetailPrice'));