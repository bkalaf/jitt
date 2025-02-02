import { useRouteContext, useRouter } from '@tanstack/react-router';
import { useCallback } from 'react';

export function useInvalidate(collection: string) {
    const { queryClient } = useRouteContext({ from: '__root__' });
    const router = useRouter();
    const invalidator = useCallback(async () => {
        await queryClient.invalidateQueries(
            {
                queryKey: [collection]
            },
            { throwOnError: true }
        );
        await queryClient.refetchQueries(
            {
                queryKey: [collection]
            },
            { throwOnError: true }
        );
        await router.invalidate();
    }, [collection, queryClient, router]);
    return invalidator;
}
