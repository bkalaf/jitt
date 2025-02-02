import { RowData } from '@tanstack/react-table';
import { FieldValues } from 'react-hook-form';
import { OIDElement } from '../Controls/OIDElement';
import { TextElement, IntegerElement, DateElement } from '../Controls/TextElement';

export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextElement name='name' label='Name' />
            <IntegerElement name='id' label='ID' min={0} />
            <TextElement name='selector' label='Selector' />
            <DateElement name='timestamp' label='Timestamp' />
        </>
    );
}
