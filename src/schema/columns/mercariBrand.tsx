import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import col from '@app/schema/col';
import { IMercariBrand } from '@app/schema/mercariBrand';

const helper = createColumnHelper<IMercariBrand>();

export const columns: ColumnDef<IMercariBrand, any>[] = [
    col.actions(helper),
    col._id(),
    helper.accessor('name', {
        header: 'Name'
    }),
    helper.accessor('id', {
        header: 'ID',
        cell: (item) => item?.getValue()?.toFixed(0) ?? ''
    }),
    helper.accessor('selector', {
        header: 'Selector',
        cell: (item) => item?.getValue() ?? ''
    }),
    helper.accessor('timestamp', {
        header: 'Timestamp',
        cell: (item) => dayjs(item.getValue()).format('MM/DD/YYYY')
    })
];
