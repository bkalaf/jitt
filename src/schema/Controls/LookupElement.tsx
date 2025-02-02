import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';
import { RowData } from '@tanstack/react-table';
import { queryDefaultFunction } from '../../main/queryDefaultFunction';
import { $className } from '../../util/$className';

export function LookupElement<T extends RowData>({
    name,
    label,
    collection,
    labelProperty,
    required,
    readonly,
    disabled,
    datalistID,
    ...props
}: {
    name: string;
    label: string;
    collection: string;
    labelProperty: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    className?: string;
    datalistID: string;
}) {
    const { queryClient, getMongo } = useRouteContext({ from: '__root__' });
    const { data, isLoading } = useSuspenseQuery({
        queryKey: [collection, 'dropdown', labelProperty],
        queryFn: async () => {
            const allRecords = await queryClient.ensureQueryData({
                queryKey: [collection, ['name']],
                meta: {
                    getMongo
                },
                queryFn: queryDefaultFunction
            });
            return allRecords.map((x) => ({ label: x[labelProperty] as string, value: x._id.toHexString() })).sort((a, b) => a.label.localeCompare(b.label));
        }
    });
    return (
        <div className='flex flex-col'>
            <datalist id={datalistID}>
                <option key={''} value={''} className='indent-1.5 text-sm font-normal font-small-caps mb-1'>
                    Choose Value...
                </option>
                {data.map(({ label: $label, value: $value }) => (
                    <option key={$value} value={$value} className='indent-1.5 text-sm font-small-caps mb-1'>
                        {$label}
                    </option>
                ))}
            </datalist>
            <form.Field name={name as any}>
                {(field) => {
                    const spread = $className({ ...props, color: 'sky', interactions: 'hover,focus,disable', controlSize: 'small' }, { 'ring ring-amber-500': field.state.meta.isDirty }, 'flex checked:text-rose-600');
                    return (
                        <>
                            <label className='text-sm font-bold flex'>
                                {label}:
                                {isLoading ?
                                    <input value='LOADING...' readOnly />
                                :   <input
                                        list={datalistID}
                                        name={field.name}
                                        checked={(field.state.value as boolean) ?? false}
                                        onBlur={field.handleBlur}
                                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => field.handleChange(!ev.target.checked as any)}
                                        required={required}
                                        readOnly={readonly}
                                        disabled={disabled}
                                        {...spread}
                                    />
                                }
                            </label>
                            <strong className='flex items-center justify-center text-red-500'>{field.state.meta.errors.join(', ')}</strong>
                        </>
                    );
                }}
            </form.Field>
        </div>
    );
}
