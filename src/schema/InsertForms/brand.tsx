import { FieldValues } from 'react-hook-form';
import { RowData } from '@tanstack/react-table';
import { DropdownControl } from '../../components/Controls/DropdownBase';
import { OIDElement } from '../../components/Controls/OIDElement';
import { DateControl } from '../../components/Controls/DateControl';
import { TextControl } from '../../components/Controls/TextControl';

export function InsertForm<T extends FieldValues & RowData>() {
    // TODO Usage Element
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextControl name='name' label='Name' />
            <TextControl name='regex' label='RegEx' />
            <DateControl name='timestamp' label='Timestamp' />
            <DropdownControl name='mercariBrand' label='Mercari Brand' collection='mercariBrand' labelProperty='name' />
        </>
    );
}
