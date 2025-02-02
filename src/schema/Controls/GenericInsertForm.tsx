import { useMutation } from '@tanstack/react-query';
import { useRouteContext, useParams } from '@tanstack/react-router';
import { RowData } from '@tanstack/react-table';
import { useCallback, useMemo } from 'react';
import { FieldValues, useForm, FormProvider } from 'react-hook-form';
import { Button } from '../../components/Button';
import { useInvalidate } from '../../hooks/useInvalidate';
import { ignore } from './ignore';
import { ObjectId } from 'mongodb';

export function GenericInsertForm(collectionName: string) {
    return function InnerGeneric<T extends FieldValues & RowData>({ toggle, values, children }: { toggle: () => void; values?: T; children: Children }) {
        const { getMongo, convertIn, init } = useRouteContext({ from: '/data/$collection/' });
        const { collection } = useParams({ from: '/data/$collection/' });
        const invalidate = useInvalidate(collection);
        const { mutate } = useMutation({
            mutationFn: async (values: T) => {
                console.log(`mutation`);
                const mongo = await getMongo();
                const { insertedId } = await mongo.collection(collectionName).insertOne(values);
                return insertedId;
            },
            onSuccess: async () => {
                await invalidate();
                toggle();
            },
            onError: async (err) => {
                console.error(err.name);
                console.error(err.message);
                console.error(err.stack);
            }
        });
        const formContext = useForm<T>({
            defaultValues: init,
            values: values != null ? values : undefined
        });
        const handler = useCallback(
            (payload: T) => {
                const converted = convertIn(payload);
                console.log(`converted`, converted);
                mutate(converted);
            },
            [mutate, convertIn]
        );
        const onSubmit = useMemo(() => formContext.handleSubmit(handler), [formContext, handler]);
        const onReset = useCallback(
            (ev: React.SyntheticEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                formContext.reset();
            },
            [formContext]
        );
        return (
            <FormProvider {...formContext}>
                <form className='grid grid-cols-3 w-full gap-2.5 p-3' onSubmit={ignore} onReset={ignore}>
                    {children}
                    <div className='col-start-1 col-span-3 flex justify-between items-center w-full gap-x-2.5'>
                        <Button tag='button' color='sky' controlSize='medium' click={toggle} type='button' className='flex w-full'>
                            Cancel
                        </Button>
                        <Button tag='button' color='sky' controlSize='medium' click={onReset} type='reset' className='flex w-full'>
                            Reset
                        </Button>
                        <Button tag='button' color='sky' controlSize='medium' click={onSubmit} type='submit' className='flex w-full'>
                            Submit
                        </Button>
                    </div>
                </form>
            </FormProvider>
        );
    };
}

