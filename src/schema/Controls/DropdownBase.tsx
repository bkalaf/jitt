import React, { useCallback, useMemo } from 'react';
import { useElementID } from '../../hooks/useElementID';
import { useController, useFormContext } from 'react-hook-form';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';
import { queryDefaultFunction } from '../../main/queryDefaultFunction';

export function DropdownBase({
    helperText,
    label,
    name,
    required,
    readonly,
    disabled,
    onChange,
    labelProperty,
    collection
}: {
    helperText?: string;
    label: string;
    name: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    onChange?: (x?: any) => any;
    labelProperty: string;
    collection: string;
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
    const helperID = useElementID();
    const labelID = useElementID();
    const controlID = useElementID();
    const datalistID = useElementID();
    const { control } = useFormContext();
    const { field, fieldState } = useController({
        name: name as any,
        control,
        rules: {
            required
        }
    });
    const $helperText = useMemo(() => helperText ?? fieldState.error?.message ?? '', [fieldState.error?.message, helperText]);
    const $onChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const current = onChange ? onChange(ev.target.value) : ev.target.value;
            field.onChange(current);
        },
        [field, onChange]
    );
    return (
        <div className='flex w-full relative'>
            {!isLoading && (
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
            )}
            <input
                type='text'
                list={datalistID}
                id={controlID}
                className='flex rounded-md px-2.5 pb-1.5 pt-4 w-full text-xl text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white border-2 border-gray-400 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer no-value:outline-1 no-value:outline-red-500'
                aria-describedby={helperID}
                aria-labelledby={labelID}
                readOnly={readonly}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
                value={field.value}
                onChange={$onChange}
                disabled={disabled}
            />
            <label
                id={labelID}
                htmlFor={controlID}
                className='absolute text-lg text-white dark:text-white duration-300 transform-translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-has-value:text-blue-600 peer-has-value:dark:text-blue-500 peer-has-value:scale-75 peer-has-value:-translate-y-3'>
                {label}
            </label>
            {$helperText?.length > 0 && (
                <p id={helperID} className='mt-2 text-base text-red-600 font-small-caps dark:text-red-400'>
                    {$helperText}
                </p>
            )}
        </div>
    );
}
