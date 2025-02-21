import {createColumnHelper, ColumnDef} from '@tanstack/react-table';
import dayjs from 'dayjs';
import {col} from '../../util/col';
import {IProductLine} from '../productLine';

const helper = createColumnHelper<IProductLine>();

export const columns: ColumnDef<IProductLine, any>[] = [
    col.actions(helper),
    col._id(),
    col.lookup('brand', { 
        collection: 'brand',
        labelProperty: 'name'
    }),
    col.str('description'),
    col.str('joiningWords'),
    col.str('regex')
];
