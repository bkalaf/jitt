export function groupBy<T extends Record<string, any>>(key: keyof T) {
    function inner(arr: T[], accum: Record<string, T[]> = {}) {
        try {
            if (arr.length === 0) return accum;
            const [head, ...tail] = arr;
            const { [key]: sortKey } = head;
            const $sortKey = sortKey as string[];
            const current = Object.keys(accum).includes($sortKey[0])
                ? accum[$sortKey[0]]
                : [];
            const next = [...current, head];
            return inner(tail, { ...accum, [$sortKey[0]]: next });
        } catch (error) {
            const [head, ...tail] = arr;
            console.log(`ERROR in ${JSON.stringify(head)}`);
            return {};
        }
    }
    return inner;
}
