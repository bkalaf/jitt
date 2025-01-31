import { ReactFormExtendedApi } from '@tanstack/react-form';
import { RowData } from '@tanstack/react-table';
import { $className } from '../../util/$className';
import { useSuspenseQuery } from '@tanstack/react-query';
import { queryDefaultFunction } from '../../main/queryDefaultFunction';
import { useRouteContext } from '@tanstack/react-router';

export function CheckboxElement<T extends RowData>({
    name,
    label,
    required,
    readonly,
    disabled,
    form,
    ...props
}: {
    name: string;
    label: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    form: ReactFormExtendedApi<T>;
    className?: string;
}) {
    return (
        <div className='flex flex-col'>
            <form.Field name={name as any}>
                {(field) => {
                    const spread = $className({ ...props, color: 'sky', interactions: 'hover,focus,disable', controlSize: 'small' }, { 'ring ring-amber-500': field.state.meta.isDirty }, 'flex checked:text-rose-600');
                    return (
                        <>
                            <label className='text-sm font-bold flex'>
                                {label}:
                                <input
                                    type='checkbox'
                                    name={field.name}
                                    checked={(field.state.value as boolean) ?? false}
                                    onBlur={field.handleBlur}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => field.handleChange(!ev.target.checked as any)}
                                    required={required}
                                    readOnly={readonly}
                                    disabled={disabled}
                                    {...spread}
                                />
                            </label>
                            <strong className='flex items-center justify-center text-red-500'>{field.state.meta.errors.join(', ')}</strong>
                        </>
                    );
                }}
            </form.Field>
        </div>
    );
}
