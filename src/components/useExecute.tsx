import { useCallback } from 'react';


export function useExecute<TEventArgs extends React.SyntheticEvent, T extends any[] = never[]>(execute: IExecute<T>, prevent = true, ...args: T) {
    return useCallback(
        (ev: TEventArgs) => {
            const f = execute(...args);
            if (prevent) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            f();
        },
        [args, execute, prevent]
    );
}
