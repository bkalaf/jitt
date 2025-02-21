import { ColumnDef } from '@tanstack/react-table';
import { camelCaseToProper } from '../../common/text/splitStringAt';
import { ImageCell } from './ImageCell';

export const image = function <T>(accessorKey: keyof T & string, opts: { header?: string; min?: number; max?: number } = {}) {
    const header = camelCaseToProper(accessorKey);
    return {
        accessorKey,
        header: opts.header ?? header,
        cell: ImageCell
    } as ColumnDef<T, string>;
};

