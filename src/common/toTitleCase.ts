export function splitWhen<T extends any[]>(predicate: IPredicate<T[0]>, include = false) {
    function inner(arr: T[0][], accum: T[0][][] = [], current: T[0][] = []): T[0][][] {
        if (arr.length === 0) {
            return [...accum, current];
        }
        const [head, ...tail] = arr;
        if (predicate(head)) {
            if (include) {
                return inner(tail, [...accum, current], [head]);
            }
            return inner(tail, [...accum, current], []);
        }
        return inner(tail, accum, [...current, head])
    }
    return inner;
}

const isUpper = (s: string) => s.toLowerCase() !== s && s.toUpperCase() === s;
const isLower = (s: string) => s.toLowerCase() === s && s.toUpperCase() !== s;

const splitCamelCase = (s: string) => splitWhen<[string]>(isUpper, true)(s.split('')).map(x => x.join(''));
const splitKebabCase = (s: string) => splitWhen<[string]>((s: string) => s === '-')(s.split('')).map(x => x.join(''));

export function removeDoubleSpace(str: string) {
    if (str.includes('  ')) {
        return removeDoubleSpace(str.replaceAll('  ', ' '))
    }
    return str;
}
export function toProperCase(str: string) {
    const [head, ...tail] = splitKebabCase(str);
    const camelCase = [head, ...tail.map(x => [x[0].toUpperCase(), ...x.slice(1)].join(''))].join('');
    return removeDoubleSpace(
        splitCamelCase(camelCase)
            .map((x) =>
                x.length === 0
                    ? ''
                    : [x[0].toUpperCase(), ...x.slice(1)].join('')
            )
            .join(' ')
    );    
}

console.log(/TEST/.toString().slice(1, /TEST/.toString().length - 1))
console.log(new RegExp('TEST'))