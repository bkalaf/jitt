import { ObjectId } from 'mongodb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/pro-solid-svg-icons';
import { ColumnDef } from '@tanstack/react-table';

export const _idCell = (item: any) => <FontAwesomeIcon icon={faKey} className='text-orange-500 bg-black rounded-md p-0.5 w-5 h-5 inline-flex' title={item.getValue().toHexString()} />;

export const _id = function<T extends { _id: ObjectId }>() {
    return {
        accessorKey: '_id',
        header: 'OID',
        cell: _idCell
    } as ColumnDef<T, ObjectId>
}