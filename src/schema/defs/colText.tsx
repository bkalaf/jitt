import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { ColumnMeta } from '@tanstack/table-core';
import { StringTableCell } from '../../components/table/cells/StringTableCell';
import { TextAreaControl } from 'src/components/table/controls/TextAreaControl';

export function colText<T extends MRT_RowData, U>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (
            name: keyof T & string,
            $header?: string,
            formatter?: (x?: U) => string,
            opts?: Pick<Exclude<ColumnMeta<T, U | undefined>, undefined>, 'max' | 'min' | 'minLength' | 'maxLength' | 'pattern' | 'type' | 'step' | 'required' | 'validate' | 'readonly'>
        ): MRT_ColumnDef<T, U | undefined> {
            const { required, readonly, ...rest } = { readonly: false, required: false, ...(opts ?? {}) };
            const $formatter = formatter ?? ((x?: U) => (x ?? '') as string);
            return baseCol<T, U | undefined>(helper, name, StringTableCell, TextAreaControl, $header, required, readonly, { ...rest, formatter: $formatter }, undefined, ...dependencies);
        };
    };
}
