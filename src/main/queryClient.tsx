import { QueryClient } from '@tanstack/react-query';
import { queryDefaultFunction } from './queryDefaultFunction';

const MINUTES = 1000 * 60;

export type SortLevel = string | [string] | [string, boolean];
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retryOnMount: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            staleTime: MINUTES * 20,
            throwOnError: true,
            queryFn: queryDefaultFunction
        }
    }
});
;

