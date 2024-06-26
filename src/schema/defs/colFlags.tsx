import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from 'src/common/text/camelToProper';
import { baseCol } from './baseCol';
import { CheckGroupControl } from './CheckGroupControl';
import { FlattenedListTableCell } from '../../components/table/cells/FlattenedListTableCell';

export function colFlags<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, header: string, flags: string[], readonly = false) {
            return baseCol<T, ListBack<string>>(
                helper,
                name,
                FlattenedListTableCell,
                CheckGroupControl,
                header,
                false,
                readonly,
                {
                    flags: flags ?? [],
                    flattener: (value?: ListBack<string>) => value?.map(camelToProper).join(', ') ?? ''
                },
                undefined,
                ...dependencies
            ) as MRT_ColumnDef<T>;
        };
    };
}
