export type DetailLevelKey<
    TDetailType extends string,
    TPrev extends string | undefined = undefined
> = TPrev extends undefined ? `/${TDetailType}` : `${TPrev}\/${TDetailType}`;
