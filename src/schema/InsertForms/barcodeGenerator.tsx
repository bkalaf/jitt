import {FieldValues} from 'react-hook-form';
import {RowData} from '@tanstack/react-table';
import {OIDElement} from '../../components/Controls/OIDElement';

export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement name='_id' label='OID' />
        </>
    );
}
