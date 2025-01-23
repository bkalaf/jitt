import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { queryDefaultFunction } from '../main/queryDefaultFunction';
import dayjs from 'dayjs';
import { ReactTable } from '../components/ReactTable';

export const Route = createFileRoute('/data/$collection/')({
    component: RouteComponent,
    loader: async ({ context: { getMongo, queryClient }, params: { collection } }) => {
        return await queryClient.ensureQueryData({
            queryKey: [collection, ['name']],
            meta: {
                getMongo
            },
            queryFn: queryDefaultFunction
        })
    }
});

function RouteComponent() {
    const { collection } = Route.useParams();
    const data = Route.useLoaderData();
    const dataUpdatedAt = new Date(Date.now());
    return (
        <div className='flex w-full h-full flex-col'>
            <ReactTable columns={[]} collection={collection} />
            <div className='w-full flex justify-around'>
                <span>{dataUpdatedAt ? dayjs(dataUpdatedAt).format('LLL') : 'n/a'}</span>
                <span>Records: {data.length}</span>
            </div>
        </div>
    );
}
