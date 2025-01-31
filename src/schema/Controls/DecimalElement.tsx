import { ReactFormExtendedApi } from '@tanstack/react-form';
import { RowData } from '@tanstack/react-table';
import { $className } from '../../util/$className';
import { createStep } from '../createStep';

export function DecimalElement<T extends RowData>({
    name, max, min, label, required, readonly, disabled, form, precision, ...props
}: {
    name: string;
    label: string;
    max?: number;
    min?: number;
    precision?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    form: ReactFormExtendedApi<T>;
    className?: string;
}) {
    const step = createStep(precision ?? 3);
    return (
        <div className='flex flex-col'>
            <form.Field
                name={name as any}
                validators={{
                    onChange: ({ value }) => min != null && min >= (value as number) ? `Value must be greater than the minimum value: ${min.toFixed(0)}.`
                        : max != null && max <= (value as number) ? `Value must be less than the maximum value: ${max.toFixed(0)}.`
                            : null
                }}>
                {(field) => {
                    const spread = $className({ ...props, color: 'sky', interactions: 'hover,focus,disable', controlSize: 'small' }, { 'ring ring-amber-500': field.state.meta.isDirty }, 'flex');
                    return (
                        <>
                            <label className='text-sm font-bold flex'>
                                {label}:
                                <input
                                    type='number'
                                    step={step}
                                    name={field.name}
                                    value={field.state.value as string}
                                    onBlur={field.handleBlur}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => field.handleChange(ev.target.valueAsNumber as any)}
                                    max={max}
                                    min={min}
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
