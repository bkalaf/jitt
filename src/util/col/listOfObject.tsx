import { RowData, DeepKeys, ColumnDef } from '@tanstack/react-table';
import { camelCaseToProper } from '../../common/text/splitStringAt';

export const listOfObject = function <T extends RowData, U extends RowData>(accessorKey: DeepKeys<T> & string, opts: { header?: string, stringify?: (item?: U) => string } = {}) {
    const header = camelCaseToProper(accessorKey);
    const $stringify = opts.stringify ?? ((x?: U) => x == null ? '' : JSON.stringify(x))
    return {
        accessorKey,
        header: opts.header ?? header,
        cell: (item) => (item.getValue() as any as any[] ?? [] as any[]).map($stringify).join('\n')
    } as ColumnDef<T, string>;
};
