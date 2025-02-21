import {createColumnHelper, ColumnDef} from '@tanstack/react-table';
import dayjs from 'dayjs';
import {col} from '../../util/col';
import {IGroup} from '../group';

const helper = createColumnHelper<IGroup>();

export const columns: ColumnDef<IGroup, any>[] = [
    col.actions(helper),
    col._id(),
    col.str('name')
];
