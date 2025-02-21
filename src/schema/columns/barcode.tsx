import {createColumnHelper, ColumnDef} from '@tanstack/react-table';
import dayjs from 'dayjs';
import {col} from '../../util/col';
import {IBarcode, IIndividualBarcode} from '../barcode';

const helper = createColumnHelper<IBarcode>();

export const columns: ColumnDef<IBarcode, any>[] = [
    col.actions(helper),
    col._id(),
    col.listOfObject('barcodes', { stringify: (item?: IIndividualBarcode) => item == null ? '' : [item.isValid ? 'VALID' : 'INVALID', item.barcodeType, item.value].join(' / ') }),
    col.bool('isPrinted')
];
