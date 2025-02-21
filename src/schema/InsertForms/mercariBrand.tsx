import { RowData } from '@tanstack/react-table';
import { FieldValues } from 'react-hook-form';
import { OIDElement } from '../../components/Controls/OIDElement';
import { DateControl } from '../../components/Controls/DateControl';
import { IntegerControl } from '../../components/Controls/IntegerControl';
import { TextControl } from '../../components/Controls/TextControl';

export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextControl name='name' label='Name' />
            <IntegerControl name='id' label='ID' min={0} />
            <TextControl name='selector' label='Selector' />
            <DateControl name='timestamp' label='Timestamp' />
        </>
    );
}
