import { useFieldArray, useFormContext } from 'react-hook-form';
import useWhyDidYouUpdate from '../../hooks/useWhyDidYouUpdate';
import { useCallback } from 'react';
import prompt from 'electron-prompt';
import { useElementID } from '../../hooks/useElementID';
import { classifyBarcode } from '../../util/barcode';
import { IIndividualBarcode } from '../../schema/barcode';
import { BarcodeTypes } from '../../schema/enums';
import { IconButton } from '../IconButton';
import { faPenCircle } from '@fortawesome/pro-solid-svg-icons';

export function BarcodeControl(props: { helperText?: string; name: string; label: string; required?: boolean; readonly?: boolean; disabled?: boolean; stringify: (bc: IIndividualBarcode) => string }) {
    useWhyDidYouUpdate('BarcodeControl', props);
    const { name, label, helperText } = props;
    const { control } = useFormContext();
    const { fields, replace } = useFieldArray({
        name,
        control
    });
    const onClick = useCallback(
        (ev: React.SyntheticEvent) => {
            prompt({
                buttonLabels: {
                    cancel: 'Cancel',
                    ok: 'Submit'
                },
                inputAttrs: {
                    type: 'text',
                    maxLength: '13',
                    minLength: '13',
                    required: 'true'
                },
                label: 'Input a barcode to enter:',
                title: 'Barcode Insert'
            }).then((inputValue) => {
                if (inputValue == null) throw new Error('input cannot be null');
                const bcs = classifyBarcode(inputValue);
                replace(bcs);
            });
        },
        [replace]
    );

    return (
        <div className='flex flex-col w-full'>
            <label className='w-full justify-start font-bold text-lg'>{label}</label>
            <ul className='flex w-full'>
                {fields.map((item) => {
                    const { id, value, barcodeType, isValid } = item as { id: string; value: string; barcodeType: BarcodeTypes; isValid: boolean };
                    return (
                        <li key={id} className='indent-1.5 font-normal text-base'>
                            <span className='flex flex-grow w-full'>{props.stringify({ value, barcodeType, isValid })}</span>
                        </li>
                    );
                })}
            </ul>
            <div className='flex w-full items-center justify-center'>
                <IconButton color='cyan' icon={faPenCircle} click={onClick} />
            </div>
        </div>
    );
}
