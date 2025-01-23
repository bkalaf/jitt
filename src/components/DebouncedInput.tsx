import { useState, useEffect } from 'react';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';

export type IDebouncedInputProps = {
    value: string | number;
    onChange: (value: string | number) => void;
    debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export function DebouncedInput(props: IDebouncedInputProps) {
    useWhyDidYouUpdate('DebouncedInput', props);

    const { value: initialValue, onChange, debounce, ...rest } = { debounce: 500, ...props };
    const [value, setValue] = useState<string | number>(initialValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => onChange(value), debounce);
        return () => clearTimeout(timeout);
    }, [debounce, onChange, value]);

    return <input {...rest} value={value} onChange={handleInputChange} />;
}
