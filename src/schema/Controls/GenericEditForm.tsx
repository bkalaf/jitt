import { useMutation } from '@tanstack/react-query';
import { useRouteContext, useParams } from '@tanstack/react-router';
import { RowData } from '@tanstack/react-table';
import { ObjectId } from 'mongodb';
import { useCallback, useMemo } from 'react';
import { FieldValues, useForm, FormProvider } from 'react-hook-form';
import { Button } from '../../components/Button';
import { useInvalidate } from '../../hooks/useInvalidate';
import { ignore } from './ignore';

export function GenericEditForm<T extends FieldValues & RowData>(collectionName: string, ID: string, original: T) {
    return function InnerGeneric({ toggle, children }: { toggle: () => void; children: Children }) {
        const { getMongo, convertIn, convertOut, init } = useRouteContext({ from: '/data/$collection/' });
        const { collection } = useParams({ from: '/data/$collection/' });
        const invalidate = useInvalidate(collection);
        const { mutate } = useMutation({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            mutationFn: async ({ _id: _, ...values }: T) => {
                console.log(`mutation`);
                console.log(`ID`, ID)
                console.log(`values`, values);
                const mongo = await getMongo();
                const result = await mongo.collection(collectionName).findOneAndUpdate({ _id: new ObjectId(ID) }, { $set: values }, { upsert: true, ignoreUndefined: true });
                return result;
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
            defaultValues: async () => {
                const current = await init();
                return {
                    ...current,
                    ...convertIn(original)
                };
            }
        });
        const handler = useCallback(
            (payload: T) => {
                const converted = convertOut(payload);
                console.log(`converted`, converted);
                mutate(converted);
            },
            [mutate, convertOut]
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
                    <div className='col-start-1 col-span-3 flex justify-between items-center w-full gap-x-2.5 mt-6 border-2 border-white'>
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
