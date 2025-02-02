import { createFileRoute } from '@tanstack/react-router';
import { queryDefaultFunction } from '../main/queryDefaultFunction';
import dayjs from 'dayjs';
import { ReactTable } from '../components/ReactTable';
import { ColumnDef } from '@tanstack/react-table';
import schema from './../schema';
import xforms from './../schema/xforms';
import inits from './../schema/init';
import InsertForms from '../schema/InsertForms';

export const Route = createFileRoute('/data/$collection/')({
    component: RouteComponent,
    beforeLoad: ({ params: { collection }}) => {
        return {
            columns: schema[collection as keyof typeof schema] as ColumnDef<any>[],
            convertIn: xforms.convertIn[collection as keyof typeof xforms.convertIn] as (x: any) => any,
            convertOut: xforms.convertOut[collection as keyof typeof xforms.convertOut] as (x: any) => any,
            init: inits[collection as keyof typeof inits] as () => Promise<any>,
            FormControls: InsertForms[collection as keyof typeof InsertForms]
        };
    },
    loader: async ({ context: { getMongo, queryClient }, params: { collection } }) => {
        return await queryClient.ensureQueryData({
            queryKey: [collection, ['name']],
            meta: {
                getMongo
            },
            queryFn: queryDefaultFunction
        })
    },
    
});

function RouteComponent() {
    const { collection } = Route.useParams();
    const data = Route.useLoaderData();
    const dataUpdatedAt = new Date(Date.now());
    const { columns } = Route.useRouteContext();
    return (
        <div className='flex w-full h-full flex-col'>
            <ReactTable columns={columns} collection={collection} />
            <div className='w-full flex justify-around'>
                <span>{dataUpdatedAt ? dayjs(dataUpdatedAt).format('LLL') : 'n/a'}</span>
                <span>Records: {data.length}</span>
            </div>
        </div>
    );
}
