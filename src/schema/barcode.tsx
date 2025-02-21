import { ColumnDef, createColumnHelper, RowData } from '@tanstack/react-table';
import { ObjectId } from 'mongodb';
import dayjs from 'dayjs';
import { FieldValues } from 'react-hook-form';
import { BarcodeTypes } from './enums';

export type IIndividualBarcode = {
    value: string;
    barcodeType: BarcodeTypes;
    isValid: boolean;
}

export type IBarcode = {
    _id: ObjectId;
    owner: string;
    barcodes: IIndividualBarcode[];
    readonly printBatches: any[];
    readonly isPrinted: boolean;
};

export type IBarcodeLookup = {
    [barcode: string]: {
        isValid: true;
        barcodeType: BarcodeTypes;
        _id: ObjectId;
    }
}