import { ReactFormExtendedApi } from '@tanstack/react-form';
import { RowData } from '@tanstack/react-table';
import { $className } from '../../util/$className';


export function EnumElement<T extends RowData>({
    name, label, required, readonly, disabled, form, options, ...props
}: {
    name: string;
    label: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    form: ReactFormExtendedApi<T>;
    className?: string;
    options: Array<{ label: string; value: string; }>;
}) {
    return (
        <div className='flex flex-col'>
            <form.Field name={name as any}>
                {(field) => {
                    const spread = $className({ ...props, color: 'sky', interactions: 'hover,focus,disable', controlSize: 'small' }, { 'ring ring-amber-500': field.state.meta.isDirty }, 'flex w-full');
                    return (
                        <>
                            <label className='text-sm font-bold'>
                                {label}:
                                <select
                                    name={name}
                                    required={required}
                                    disabled={disabled}
                                    aria-readonly={readonly}
                                    {...spread}
                                    onBlur={field.handleBlur}
                                    onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => field.handleChange(ev.target.value as any)}
                                    value={field.state.value as string}>
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
                        </>
                    );
                }}
            </form.Field>
        </div>
    );
}
