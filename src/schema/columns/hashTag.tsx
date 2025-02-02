import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import col from '@app/schema/col';
import { IHashTag, IHashTagUsage } from '@app/schema/hashTag';

const helper = createColumnHelper<IHashTag>();

const hashTagUsageStringify = (usage?: IHashTagUsage) => (usage == null ? '' : [dayjs(usage.from).format('LLL'), usage.count.toFixed(0)].join(': '));
export const columns: ColumnDef<IHashTag, any>[] = [col.actions(helper), col._id(), col.str('name'), col.listOfObject('usage', { stringify: hashTagUsageStringify })];

/* 
col.int('maxCount')

const helper = createColumnHelper<IHashTag>();

export const columns: ColumnDef<IHashTag, any>[] = [
    col.actions(helper),
    col._id(),
    col.str('name'),
    // col.int('maxCount')
    // TODO Add Usage
];
 */
