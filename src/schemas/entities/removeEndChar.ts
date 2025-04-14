
export function removeEndChar(...char: string[]) {
    return (s: string): string => char.some((c) => s.endsWith(c))
        ? removeEndChar(...char)(s.slice(0, s.length - 1))
        : s;
}
