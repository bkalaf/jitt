import { ReactFormExtendedApi } from '@tanstack/react-form';
import { RowData } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { $className } from '../../util/$className';


export function DateElement<T extends RowData>({
    name, max, min, label, required, readonly, disabled, form, ...props
}: {
    name: string;
    label: string;
    max?: Date;
    min?: Date;
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
                    const spread = $className({ ...props, color: 'sky', interactions: 'hover,focus,disable', controlSize: 'small' }, { 'ring ring-amber-500': field.state.meta.isDirty }, 'flex');
                    return (
                        <>
                            <label className='text-sm font-bold flex'>
                                {label}:
                                <input
                                    type='date'
                                    name={field.name}
                                    value={field.state.value as string}
                                    onBlur={field.handleBlur}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => field.handleChange(ev.target?.valueAsDate as any)}
                                    max={max ? dayjs(max).format('MM/DD/YYYY') : undefined}
                                    min={min ? dayjs(min).format('MM/DD/YYYY') : undefined}
                                    required={required}
                                    readOnly={readonly}
                                    disabled={disabled}
                                    {...spread} />
                            </label>
                            <strong className='flex items-center justify-center text-red-500'>{field.state.meta.errors.join(', ')}</strong>
                        </>
                    );
                }}
            </form.Field>
        </div>
    );
}
