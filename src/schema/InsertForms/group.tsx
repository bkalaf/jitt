import { FieldValues } from 'react-hook-form';
import { RowData } from '@tanstack/react-table';
import { OIDElement } from '../../components/Controls/OIDElement';
import { TextControl } from '../../components/Controls/TextControl';

export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextControl name='name' label='Name' />
        </>
    );
}
