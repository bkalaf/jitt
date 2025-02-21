import {createColumnHelper, ColumnDef} from '@tanstack/react-table';
import dayjs from 'dayjs';
import {col} from '../../util/col';
import {IMediaCollection} from '../mediaCollection';

const helper = createColumnHelper<IMediaCollection>();

export const columns: ColumnDef<IMediaCollection, any>[] = [
    col.actions(helper),
    col._id(),
    col.str('name'),
    col.str('regex'),
    col.str('mediaType')
];
