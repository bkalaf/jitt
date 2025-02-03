import {createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { IBrand } from '@app/schema/brand';
import { col } from '../col';

const helper = createColumnHelper<IBrand>();

export const columns: ColumnDef<IBrand, any>[] = [
    col.actions(helper),
    col._id(),
    col.str('name'),
    col.str('regex', { header: 'RegEx' }),
    col.date('timestamp'),
    col.lookup('mercariBrand', { collection: 'mercariBrand', labelProperty: 'name' })
];
