import React, { useCallback, useMemo } from 'react';
import { useElementID } from '../../hooks/useElementID';
import { useController, useFormContext } from 'react-hook-form';
import { $className } from '../../util/$className';


export function SelectControl({
    helperText, label, name, required, readonly, disabled, onChange, options: $opts, ...props
}: {
    helperText?: string;
    label: string;
    name: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    onChange?: (x?: any) => any;
    options: { label: string; value: string; }[];
    className?: string;
}) {
    const options = useMemo(() => $opts.sort((a, b) => a.label.localeCompare(b.label)), [$opts]);
    const helperID = useElementID();
    const labelID = useElementID();
    const controlID = useElementID();
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
    const spread = $className({ ...props, color: 'sky', interactions: 'hover,focus,disable', controlSize: 'small' }, { 'ring ring-amber-500': fieldState.isDirty }, 'flex w-full py-0.5 px-1.5');
    return (
        <div className='flex w-full relative'>
            <label className='text-sm font-bold' id={labelID} htmlFor={controlID}>
                {label}:
                <select
                    id={controlID}
                    aria-labelledby={labelID}
                    name={name}
                    required={required}
                    disabled={disabled}
                    aria-readonly={readonly}
                    {...spread}
                    onBlur={field.onBlur}
                    onChange={$onChange}
                    value={field.value as string}>
                    <option key={''} value={''} className='indent-1.5 text-sm font-normal font-small-caps mb-1'>
                        Choose Value...
                    </option>
                    {options.map(({ label: $label, value: $value }) => (
                        <option key={$value} value={$value} className='indent-1.5 text-sm font-small-caps mb-1'>
                            {$label}
                        </option>
                    ))}
                </select>
            </label>
            {$helperText?.length > 0 && (
                <p id={helperID} className='mt-2 text-base text-red-600 font-small-caps dark:text-red-400'>
                    {$helperText}
                </p>
            )}
        </div>
    );
}
