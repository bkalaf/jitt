import { ColumnDef, RowData } from '@tanstack/react-table';
import { camelCaseToProper } from '../../common/text/splitStringAt';

export const lookup = function <T extends RowData, U extends RowData>(accessorKey: keyof T & string, opts: { header?: string; collection?: string; labelProperty?: string } = { }) {
    const { labelProperty, collection } = { ...{ collection: '', labelProperty: '' }, ...opts };
    const header = camelCaseToProper(accessorKey);
    return {
        accessorKey,
        header: opts.header ?? header,
        cell: (item) => {
            const value = item.getValue<U | undefined>(); 
            return value == null ? '' : value[labelProperty as keyof U]
        },
        meta: {
            collection,
            labelProperty
        }
    } as ColumnDef<T, string>;
};