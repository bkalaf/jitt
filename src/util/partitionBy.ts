export function partitionBy<T, U>(predicate: IPredicate<[T]>, transform?: (x: T) => U) {
    const $transform = transform ?? ((x: T) => x as any as U);
    function inner(arr: T[], left: T[] = [], right: T[] = []): [U[], U[]] {
        if (arr.length === 0) return [left.map($transform), right.map($transform)];
        const [head, ...tail] = arr;
        if (predicate(head)) {
            return inner(tail, [...left, head], right);
        }
        return inner(tail, left, [...right, head]);
    }
    return inner;
}
