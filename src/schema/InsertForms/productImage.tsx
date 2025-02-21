import { FieldValues } from 'react-hook-form';
import { RowData } from '@tanstack/react-table';
import { OIDElement } from '../../components/Controls/OIDElement';
import { TextControl } from '../../components/Controls/TextControl';
import { ImageControl } from '../../components/Controls/ImageControl';
import { CheckboxControl } from '../../components/Controls/CheckboxControl';
import { SelectControl } from '../../components/Controls/SelectControl';

const selectionOptions = [
    { label: 'Original', value: 'original' },
    { label: 'Remove BG', value: 'removeBg' }
]
export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextControl name='name' label='Name' required />
            <ImageControl name='original.data' label='Original' />
            <ImageControl name='removeBg.data' label='Remove BG' />
            <CheckboxControl name='ignore' label='Ignore' />
            <CheckboxControl name='doNotRemoveBg' label='Do Not Remove BG' />
            <SelectControl name='selection' label='Selection' options={selectionOptions} />
        </>
    );
}
