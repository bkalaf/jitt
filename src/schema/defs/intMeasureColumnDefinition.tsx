import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { truncateAuto } from '../../common/number/truncateAuto';
import { baseCol } from './baseCol';
import { FloatingPointTableCell } from '../../components/table/cells/FloatingPointTableCell';
import { StringControl } from '../../components/table/controls/StringControl';

export function intMeasureColumnDefinition<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, $header: string, uom: string, opts: { min?: number; max?: number; required?: boolean; readonly?: boolean }): MRT_ColumnDef<T, number | undefined> {
            const formatter = (x?: number) => (x == null ? '' : truncateAuto(x).concat(' ').concat(uom));
            return baseCol<T, number | undefined>(helper, name, FloatingPointTableCell, StringControl, $header, opts?.required, opts?.readonly, { type: 'number', min: opts?.min ?? 0, max: opts?.max, formatter, step: 1 }, undefined, ...dependencies);
        };
    };
}
