import { RowData } from '@tanstack/react-table';
import { ControlBase } from './ControlBase';
import { dateOnChange } from './dateOnChange';


export function DateControl<T extends RowData>({
    name, label, required, readonly, disabled, helperText
}: {
    helperText?: string;
    name: string;
    label: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
}) {
    return <ControlBase name={name} label={label} helperText={helperText} required={required} readonly={readonly} disabled={disabled} type='date' onChange={dateOnChange} />;
}
