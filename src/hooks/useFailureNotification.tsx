import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { Slide } from '@mui/material';

export function useFailureNotification<T>(messageGenerator: (x: T) => string) {
    const { enqueueSnackbar } = useSnackbar();
    return useCallback(
        (errors: T) => {
            // eslint-disable-next-line no-console
            console.error(errors);
            enqueueSnackbar(messageGenerator(errors), { preventDuplicate: true, variant: 'error', TransitionComponent: Slide });
        },
        [enqueueSnackbar, messageGenerator]
    );
}
