import { RowData } from '@tanstack/react-table';
import { ControlBase } from './ControlBase';
import dayjs from 'dayjs';
import { createStep } from '../../util/createStep';

export function TextElement<T extends RowData>({
    name,
    maxLength,
    minLength,
    pattern,
    label,
    required,
    readonly,
    disabled,
    helperText
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

export function IntegerElement<T extends RowData>({
    name,
    label,
    required,
    readonly,
    disabled,
    helperText,
    min,
    max
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

export function FloatElement<T extends RowData>({
    name,
    label,
    required,
    readonly,
    disabled,
    helperText,
    min,
    max,
    precision
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

const dateOnChange = (x: string) => {
        try {
            const newValue = dayjs(new Date(Date.parse(x))).format('YYYY-MM-DD');
            return newValue;
        } catch (error) {
            console.error((error as any)?.message);
            return x;
        }
    }
export function DateElement<T extends RowData>({
    name,
    label,
    required,
    readonly,
    disabled,
    helperText
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