import { RowData, DeepKeys, ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { camelCaseToProper } from '../../common/text/splitStringAt';

export const date = function <T extends RowData>(accessorKey: DeepKeys<T> & string, opts: { header?: string; } = {}) {
    const header = camelCaseToProper(accessorKey);
    return {
        accessorKey,
        header: opts.header ?? header,
        cell: (item) => dayjs(item.getValue()).format('LLL')
    } as ColumnDef<T, string>;
};
