import { ControlBase } from './ControlBase';


export function CheckboxControl({
    name, label, required, readonly, disabled, helperText
}: {
    helperText?: string;
    name: string;
    label: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
}) {
    return <ControlBase name={name} label={label} helperText={helperText} required={required} readonly={readonly} disabled={disabled} type='checkbox' />;
}
