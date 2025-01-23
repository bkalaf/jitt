import { ipcRenderer } from 'electron';
import { IpcRendererEvent } from 'electron/renderer';
import { useLayoutEffect } from 'react';

export function useIPCEvent<TArgs extends any[] = never[]>(eventName: string, listener: (event: IpcRendererEvent, ...args: TArgs) => void) {
    useLayoutEffect(() => {
        ipcRenderer.addListener(eventName, listener);
        return () => {
            ipcRenderer.removeListener(eventName, listener);
        };
    }, [eventName, listener]);
}
