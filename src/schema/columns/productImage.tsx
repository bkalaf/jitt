import {createColumnHelper, ColumnDef} from '@tanstack/react-table';
import dayjs from 'dayjs';
import {col} from '../../util/col';
import {IProductImage} from '../productImage';

const helper = createColumnHelper<IProductImage>();

export const columns: ColumnDef<IProductImage, any>[] = [
    col.actions(helper),
    col._id(),
    col.str('name'),
    col.image('original.data' as any),
    col.image('doNotRemoveBg.data' as any),
    col.bool('ignore'),
    col.bool('doNotRemoveBg'),
    col.str('selection')
];
