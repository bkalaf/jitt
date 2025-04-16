Array.prototype.preface = function <T>(this: Array<T>, s: T) {
    return [s].concat(...this);
};
Array.prototype.prefaceIfNonEmpty = function <T>(this: Array<T>, s: T) {
    return this.length > 0 ? [s].concat(...this) : [];
};
Array.prototype.prefaceNonEmptyJoin = function (
    this: Array<string>,
    s = '',
    j = '\n'
) {
    return this.length > 0 ? [[s].concat(...this).join(j)] : [];
};
Array.prototype.concatIfNonEmpty = function<T>(this: Array<T>, s: T) {
    return this.length > 0 ? this.concat(s) : [];
}
Array.prototype.zip = function<T, U>(this: Array<T>, arr: Array<U>) {
    if (this.length !== arr.length) throw new Error('mismatches array lengths');
    function inner(todoT: T[], todoU: U[], accum: [T, U][] = []) {
        if (todoT.length === 0) return accum;
        const [headT, ...tailT] = todoT;
        const [headU, ...tailU] = todoU;
        return inner(tailT, tailU, [...accum, [headT, headU]])
    }
    return inner(this, arr);
}
Array.prototype.cinch = function(this: Array<[number, string]>, pluralize = true) {
    return this.map(([k, v]) =>
        k === 0 ? undefined : k > 1 ? [k, pluralize ? v.concat('s') : v] : [k, v]
    )
        .filter((x) => x != null)
        .map((a) => a.join(''))
        .join(' ');
}
String.prototype.prefaceNonEmpty = function(this: string, prefix: string) {
    return this.length === 0 ? '' : [prefix, this].join('')
}

export const i = 2;