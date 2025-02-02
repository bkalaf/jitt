import { ReactFormExtendedApi } from '@tanstack/react-form';
import { RowData } from '@tanstack/react-table';
import { $className } from '../../util/$className';
import { useCallback } from 'react';
import { ObjectId } from 'mongodb';
import { ControlBase } from './ControlBase';
import { useFormContext } from 'react-hook-form';
import { useElementID } from '../../hooks/useElementID';

export function OIDControlElement<T extends RowData>({ id, disabled, name, form, ...props }: { disabled?: boolean; className?: string; id: string; form: ReactFormExtendedApi<T>; name: string; required?: boolean; readonly?: boolean }) {
    return (
        <form.Field name={name as any}>
            {function InnerField(field) {
                const spread = $className({ ...props, color: 'sky', controlSize: 'medium' }, {}, '');
                const onChange = useCallback(
                    (ev: React.ChangeEvent<HTMLInputElement>) => {
                        field.handleChange(new ObjectId(ev.target.value as string) as any);
                    },
                    [field]
                );
                return <input id={id} name={name} type='text' value={field.state.value as string} onBlur={field.handleBlur} onChange={onChange} required readOnly disabled={disabled} {...spread} />;
            }}
        </form.Field>
    );
}

/* 

export function OIDControlElement<T extends RowData>({
    id,
    className,
    label,
    disabled,
    readonly,
    required,
    name,
    form,
    ...props
}: {
    label: string;
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
    className?: string;
    id: string;
    form: ReactFormExtendedApi<T>;
    name: string & DeepKeys<T>;
}) {
    return (
        <form.Field name={name as any}>
            {function InnerField(field) {
                const spread = $className({ ...props, color: 'sky', controlSize: 'medium' }, {}, '');
                const onChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
                    field.handleChange(new ObjectId(ev.target.value as string) as any);
                }, [field]);
                return <input name={name} type='text' value={field.state.value as string} onBlur={field.handleBlur} onChange={onChange} required={required} readOnly={readonly} disabled={disabled} {...spread} />;
            }}
        </form.Field>
    );
} */

export function OIDElement({ name, label }: { label: string; name: string }) {
    return <ControlBase label={label} name={name} required  />
}
