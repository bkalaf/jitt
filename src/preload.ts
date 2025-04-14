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

export const i = 2;