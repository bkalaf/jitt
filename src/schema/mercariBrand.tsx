import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { ObjectId } from 'mongodb';
import col from './col';
import dayjs from 'dayjs';
import { FormApi, useForm } from '@tanstack/react-form';
import { OIDElement, TextElement } from './Controls/TextElement';
import { IntegerElement } from './Controls/IntegerElement';
import { DateElement } from './Controls/DateElement';
import { useMutation } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';
import { Button } from '../components/Button';
import { ignore } from './Controls/ignore';

export type IMercariBrand = {
    _id: ObjectId;
    name: string;
    owner: string;
    id: number;
    selector: string;
    timestamp: Date;
};

const helper = createColumnHelper<IMercariBrand>();

export const columns: ColumnDef<IMercariBrand, any>[] = [
    col._id(),
    helper.accessor('name', {
        header: 'Name'
    }),
    helper.accessor('id', {
        header: 'ID',
        cell: (item) => item?.getValue()?.toFixed(0) ?? ''
    }),
    helper.accessor('selector', {
        header: 'Selector',
        cell: (item) => item?.getValue() ?? ''
    }),
    helper.accessor('timestamp', {
        header: 'Timestamp',
        cell: (item) => dayjs(item.getValue()).format('MM/DD/YYYY')
    })
];

export function MercariBrandForm({ toggle }: { toggle: () => void }) {
    const { getMongo } = useRouteContext({ from: '__root__' });
    const { mutate } = useMutation({
        mutationFn: async (values: IMercariBrand) => {
            console.log(`mutation`);
            const mongo = await getMongo();
            const { insertedId } = await mongo.collection('mercariBrand').insertOne(values);
            return insertedId;
        }
    });
    const form = useForm<IMercariBrand>({
        defaultValues: {
            _id: new ObjectId(),
            name: '',
            timestamp: new Date(Date.now())
        } as IMercariBrand,
        transform: ((values: IMercariBrand) => {
            console.log(`transform`);
            return {
                ...values,
                _id: typeof values._id === 'string' ? new ObjectId(values._id as string) : values._id,
                owner: 'admin@junk-in-the-trunk.com'
            };
        }) as any,
        onSubmit: ({ value }) => {
            console.log(`onSubmit`, value);
            mutate(value);
        }
    });

    return (
        <form onSubmit={form.handleSubmit} onReset={() => form.reset(undefined, { keepDefaultValues: true })}>
            <div className='w-full grid grid-cols-3'>
                <OIDElement name='_id' label='OID' form={form} />
                <TextElement name='name' label='Name' form={form} />
                <IntegerElement name='id' label='ID' form={form} min={0} />
                <TextElement name='selector' label='Selector' form={form} />
                <DateElement name='timestamp' label='Timestamp' form={form} />
                <div className='flex col-span-3 gap-x-3'>
                    <Button color='slate' controlSize='small' interactions='hover,focus,disable' type='button' className='flex' click={toggle}>
                        Cancel
                    </Button>
                    <Button color='slate' controlSize='small' interactions='hover,focus,disable' type='reset' click={ignore}>
                        Reset
                    </Button>
                    <Button color='slate' controlSize='small' interactions='hover,focus,disable' type='submit' click={ignore}>
                        Submit
                    </Button>
                </div>
            </div>
        </form>
    );
}
