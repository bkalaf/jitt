import { RowData } from '@tanstack/react-table';
import { ControlBase } from './ControlBase';


export function IntegerControl<T extends RowData>({
    name, label, required, readonly, disabled, helperText, min, max
}: {
    helperText?: string;
    name: string;
    label: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    min?: number;
    max?: number;
}) {
    return <ControlBase name={name} label={label} helperText={helperText} required={required} readonly={readonly} disabled={disabled} step={1} min={min} max={max} type='number' />;
}
