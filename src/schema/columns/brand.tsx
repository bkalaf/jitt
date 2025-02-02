import {createColumnHelper, ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import col from '@app/schema/col';
import { IBrand } from '@app/schema/brand';

const helper = createColumnHelper<IBrand>();

export const columns: ColumnDef<IBrand, any>[] = [
    col.actions(helper),
    col._id(),
    col.str('name'),
    col.str('regex', { header: 'RegEx' }),
    col.date('timestamp'),
    col.lookup('mercariBrand', { collection: 'mercariBrand', labelProperty: 'name' })
];
