import { FieldValues } from 'react-hook-form';
import { RowData } from '@tanstack/react-table';
import { OIDElement } from '../../components/Controls/OIDElement';
import { CheckboxControl } from '../../components/Controls/CheckboxControl';
import { BarcodeControl } from '../../components/Controls/BarcodeControl';
import { IIndividualBarcode } from '../barcode';

export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <CheckboxControl name='isPrinted' label='Is Printed' readonly />
            <BarcodeControl name='barcodes' label='Barcodes' stringify={(item?: IIndividualBarcode) => (item == null ? '' : [item.isValid ? 'VALID' : 'INVALID', item.barcodeType, item.value].join(' / '))} />
        </>
    );
}
