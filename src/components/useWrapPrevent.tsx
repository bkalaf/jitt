import { useCallback } from 'react';

/*
{
    onClicklick: IEventAction;
    disabled?: boolean;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    title?: string;
} */

export function useWrapPrevent<TEventArgs extends React.SyntheticEvent>(execute: IEventAction) {
    return useCallback(
        (ev: TEventArgs) => {
            ev.preventDefault();
            ev.stopPropagation();
            execute();
        },
        [execute]
    );
}
