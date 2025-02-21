import { RowData } from '@tanstack/react-table';
import { ControlBase } from './ControlBase';
import { createStep } from '../../util/createStep';


export function FloatControl<T extends RowData>({
    name, label, required, readonly, disabled, helperText, min, max, precision
}: {
    helperText?: string;
    name: string;
    label: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    min?: number;
    max?: number;
    precision?: 0 | 1 | 2 | 3 | 4 | 5;
}) {
    const step = createStep(precision ?? 4);
    return <ControlBase name={name} label={label} helperText={helperText} required={required} readonly={readonly} disabled={disabled} step={step} min={min} max={max} type='number' />;
}
