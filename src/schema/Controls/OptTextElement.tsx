import { ReactFormExtendedApi } from '@tanstack/react-form';
import { RowData } from '@tanstack/react-table';
import { $className } from '../../util/$className';
import { ignore } from './ignore';

export function OptTextElement<T extends RowData>({
    name, maxLength, minLength, pattern, label, required, readonly, disabled, form, ...props
}: {
    name: string;
    label: string;
    maxLength?: number;
    minLength?: number;
    pattern?: RegExp;
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
                                    type='text'
                                    name={field.name}
                                    value={field.state.value as string}
                                    onBlur={field.handleBlur}
                                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => (ev.target.value != null && ev.target.value.length > 0 ? field.handleChange(ev.target.value as any) : ignore())}
                                    maxLength={maxLength}
                                    minLength={minLength}
                                    pattern={pattern?.toString().slice(1, pattern?.toString().length - 1)}
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


