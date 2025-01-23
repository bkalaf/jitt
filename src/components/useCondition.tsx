import { useMemo } from 'react';

export function useCondition<T extends any[] = never[]>(condition: IConditional<T> = () => false, ...args: T) {
    return useMemo(
        () =>
            typeof condition === 'boolean' ? condition
            : args.length === 0 ? (condition as any)()
            : condition(...args),
        [args, condition]
    );
}
