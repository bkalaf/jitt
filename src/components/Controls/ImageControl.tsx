import { useController, useFormContext } from 'react-hook-form';
import useWhyDidYouUpdate from '../../hooks/useWhyDidYouUpdate';
import { useCallback, useEffect, useState } from 'react';

export type IImageProps = {
    name: string;
    label: string;
};

export function ImageControl(props: IImageProps) {
    useWhyDidYouUpdate('ImageControl', props);
    const { name, label } = props;
    const { control } = useFormContext();
    const [src, setSrc] = useState<undefined | string>();
    const { field, fieldState } = useController({
        name: name as any,
        control
    });
    useEffect(() => {
        const $src = URL.createObjectURL(field.value);
        setSrc($src);
        return () => {
            URL.revokeObjectURL($src);
        };
    }, [field.value]);
    const onChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = ev.target;
        if (files == null || files?.length === 0) {
            return field.onChange(undefined);
        }
        const file = files[0];
        field.onChange(file);
    }, [field]);

    return <div className='flex flex-col w-full h-60'>
        <label className='flex w-full'>{label}</label>
        <input className='flex w-full border shadow-inner shadow-black rounded-md' onChange={onChange} />
        <img className='flex object-scale-down h-40' src={src} />
    </div>;
}
