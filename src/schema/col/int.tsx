import { ColumnDef } from '@tanstack/react-table';
import { camelCaseToProper } from '../../common/text/splitStringAt';

export const int = function <T>(accessorKey: keyof T & string, opts: { header?: string; min?: number; max?: number } = {}) {
    const header = camelCaseToProper(accessorKey);
    return {
        accessorKey,
        header: opts.header ?? header,
        cell: (item) => (item.getValue() as any as number)?.toFixed(0)
    } as ColumnDef<T, string>;
};
