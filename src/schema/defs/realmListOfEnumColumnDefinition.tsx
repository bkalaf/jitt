import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { MultiSelectControl } from '../../components/table/controls/MultiSelectControl';
import { ListTableCell } from '../../components/table/cells/ListTableCell';
import $me from '../enums';
import { standardizeOptions } from '../../util/standardizeOptions';

export function realmListOfEnumColumnDefinition<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, $header: string, opts: { options?: Record<string, string | { text: string; key: string }>; required?: boolean; readonly?: false; enumKey: keyof typeof $me; onChange?: OnChangeFn }): MRT_ColumnDef<T> {
            const { enumKey, required, readonly, onChange } = { required: false, readonly: false, ...opts };
            return baseCol(
                helper,
                name,
                ListTableCell as any,
                MultiSelectControl as any,
                $header,
                required,
                readonly,
                { objectType: 'string', enumInfo: standardizeOptions($me[enumKey as keyof typeof $me]), multiple: true },
                onChange,
                ...dependencies
            ) as MRT_ColumnDef<T>;
        };
    };
}
