import {createColumnHelper, ColumnDef} from '@tanstack/react-table';
import dayjs from 'dayjs';
import {col} from '../../util/col';
import {IBarcodeGenerator} from '../barcodeGenerator';

const helper = createColumnHelper<IBarcodeGenerator>();

export const columns: ColumnDef<IBarcodeGenerator, any>[] = [
    col.actions(helper),
    col._id()
];
