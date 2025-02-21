import { RowData, ColumnDef, DeepKeys } from '@tanstack/react-table';
import { camelCaseToProper } from '../../common/text/splitStringAt';
import { faCheckSquare, faSquare } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const bool = function <T extends RowData>(accessorKey: DeepKeys<T> & string, opts: { header?: string } = {}) {
    const header = camelCaseToProper(accessorKey);
    return {
        accessorKey,
        header: opts.header ?? header,
        cell: (item) => {
            const icon = (item.getValue() ?? false) ? faCheckSquare : faSquare;
            return <FontAwesomeIcon icon={icon} className='object-scale-down h-5' />;
        }
    } as ColumnDef<T, string>;
};
