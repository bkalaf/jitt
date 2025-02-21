import { FieldValues } from 'react-hook-form';
import { RowData } from '@tanstack/react-table';
import { OIDElement } from '../../components/Controls/OIDElement';
import { TextControl } from '../../components/Controls/TextControl';
import { DropdownControl } from '../../components/Controls/DropdownBase';

export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement
                name='_id'
                label='OID'
            />
            <DropdownControl name='brand' label='Brand' collection='brand' labelProperty='name' />
            <TextControl name='description' label='Description' />
            <TextControl name='joiningWords' label='Joining Words' />
            <TextControl name='regex' label='RegEx' />
        </>
    );
}
