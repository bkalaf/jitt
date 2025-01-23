import { useCallback, useState } from 'react';

export function useToggler(defaultState = false): [
    state: boolean,
    toggle: () => void,
    on: () => void,
    off: () => void
] {
    const [state, setState] = useState(defaultState);
    const toggle = useCallback(() => setState(x => !x), [])
    const on = useCallback(() => setState(true), []);
    const off = useCallback(() => setState(false), []);
    return [state, toggle, on, off]
}