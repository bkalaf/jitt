import { RowData } from '@tanstack/react-table';
import { ControlBase } from './ControlBase';


export function TextControl<T extends RowData>({
    name, maxLength, minLength, pattern, label, required, readonly, disabled, helperText
}: {
    helperText?: string;
    name: string;
    label: string;
    maxLength?: number;
    minLength?: number;
    pattern?: RegExp;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
}) {
    return <ControlBase name={name} label={label} helperText={helperText} required={required} readonly={readonly} disabled={disabled} maxLength={maxLength} minLength={minLength} pattern={pattern} />;
}
