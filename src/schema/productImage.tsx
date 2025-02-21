import { ColumnDef, createColumnHelper, RowData } from '@tanstack/react-table';
import { ObjectId } from 'mongodb';
import dayjs from 'dayjs';
import { DateControl } from '../components/Controls/DateControl';
import { IntegerControl } from '../components/Controls/IntegerControl';
import { TextControl } from '../components/Controls/TextControl';
import { FieldValues } from 'react-hook-form';

export type IBinaryFile = {
    data: Blob;
    extension: string;
}
export type IProductImage = {
    _id: ObjectId;
    owner: string;
    name: string;
    original?: IBinaryFile;
    removeBg?: IBinaryFile;
    ignore: boolean;
    doNotRemoveBg: boolean;
    selection?: 'original' | 'removeBg';
};
