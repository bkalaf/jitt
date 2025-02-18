import { FieldValues } from 'react-hook-form';
import { RowData } from '@tanstack/react-table';
import { OIDElement } from '../Controls/OIDElement';
import { TextElement } from '../Controls/TextElement';

export function InsertForm<T extends FieldValues & RowData>() {
    // TODO Usage Element
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextElement name='name' label='Name' />
        </>
    );
}
