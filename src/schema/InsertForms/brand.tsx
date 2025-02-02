import { FieldValues } from 'react-hook-form';
import { RowData } from '@tanstack/react-table';
import { OIDElement } from '@app/schema/Controls/OIDElement';
import { DateElement, TextElement } from '@app/schema/Controls/TextElement';
import { DropdownBase } from '../Controls/DropdownBase';

export function InsertForm<T extends FieldValues & RowData>() {
    // TODO Usage Element
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextElement name='name' label='Name' />
            <TextElement name='regex' label='RegEx' />
            <DateElement name='timestamp' label='Timestamp' />
            <DropdownBase name='mercariBrand' label='Mercari Brand' collection='mercariBrand' labelProperty='name' />
        </>
    );
}
