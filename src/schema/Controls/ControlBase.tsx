import React, { useCallback, useMemo } from 'react';
import { useElementID } from '../../hooks/useElementID';
import { useController, useFormContext } from 'react-hook-form';

export function ControlBase({
    label,
    helperText,
    readonly,
    required,
    disabled,
    maxLength,
    minLength,
    pattern,
    min,
    max,
    name,
    step,
    type,
    onChange
}: {
    helperText?: string;
    label: string;
    name: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    step?: number;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
    onChange?: (x?: any) => any
}) {
    const helperID = useElementID();
    const labelID = useElementID();
    const controlID = useElementID();
    const { control } = useFormContext();
    const { field, fieldState } = useController({
        name: name as any,
        control,
        rules: {
            required,
            maxLength,
            minLength,
            pattern,
            min,
            max
        }
    })
    const $helperText = useMemo(() => helperText ?? fieldState.error?.message ?? '', [fieldState.error?.message, helperText]);
    const $onChange = useCallback((ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const current = onChange ? onChange(ev.target.value) : ev.target.value;
        field.onChange(current);
    }, [field, onChange])
    return (
        <div className='flex w-full relative'>
            <input
                type={type ?? 'text'}
                id={controlID}
                className='block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-lg text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer no-value:bg-red-500'
                aria-describedby={helperID}
                aria-labelledby={labelID}
                readOnly={readonly}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
                value={field.value}
                onChange={$onChange}
                step={step}
                min={min}
                max={max}
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
        // <div className='flex control-group relative'>
        //     {children}
        //     <span className='highlight absolute w-28 top-1/4 left-0 pointer-events-none opacity-50 peer-focus:animation-highlight' />
        //     <span className='peer-focus:before:w-1/2 peer-focus:after:w-1/2 before:left-1/2 after:right-1/2 before:content-[""] after:content-[""] before:h-0.5 after:h-0.5 before:bottom-0.5 after:bottom-0.5 relative block w-90 after:absolute transition-all duration-200 ease-in' />
        //     <label htmlFor={controlID} className='text-lg font-medium absolute pointer-events-none left-2 top-3 transition-all duration-200 ease-in peer-focus:-top-6 peer-focus:text-base peer-focus:metallic-blue'>
        //         {label}
        //     </label>
        // </div>
    );
}
