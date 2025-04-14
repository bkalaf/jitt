export function createLookup(values: { value: string, label: string }[]) {
    return Object.fromEntries(values.map(({ value, label }) => [value, label]))
}
export function lookupValue(values: { value: string; label: string }[]) {
    return (lookup?: string) => {
        const obj = createLookup(values);
        if (lookup == null || !Object.keys(obj).includes(lookup)) return undefined;
        return obj[lookup];
    }
}