import { RowData, ColumnDef, DeepKeys } from '@tanstack/react-table';
import { camelCaseToProper } from '../../common/text/splitStringAt';

export const str = function <T extends RowData>(accessorKey: DeepKeys<T> & string, opts: { minLength?: number; maxLength?: number; pattern?: RegExp; header?: string } = {}) {
    const header = camelCaseToProper(accessorKey);
    return {
        accessorKey,
        header: opts.header ?? header,
        cell: (item) => item.getValue()
    } as ColumnDef<T, string>;
};

