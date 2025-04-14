import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import { BarcodeTypes } from '../enums';
import { classifyBarcode } from '../../util/barcode';
import { formatBarcode } from '../../util/formatBarcode';

const toMemory = z.object({
    barcodeType: BarcodeTypes.default('unknown'),
    value: z
        .string()
        .max(13, 'Must be less than 13 characters.')
        .default('0000000000000')
        .transform((val) => val.padStart(13, '0')),
    isValid: z.boolean().default(false)
}).transform(data => {
    const bcs = classifyBarcode(data.value);
    const { isValid, barcodeType, value } = bcs.filter(x => x.value === data.value)[0];
    return {
        ...data,
        isValid,
        barcodeType,
        output: isValid ? formatBarcode({ barcodeType, value }) : ''
    }
});

const toDatabase = z.object({
    barcodeType: BarcodeTypes.default('unknown'),
    value: z
        .string()
        .max(13, 'Must be less than 13 characters.')
        .default('0000000000000')
        .transform((val) => val.padStart(13, '0')),
    isValid: z.boolean().default(false)
});

export default {
    toMemory,
    toDatabase
};

export type IndividualBarcodeMemory = z.infer<typeof toMemory>;
export type IndividualBarcodeDatabase = z.infer<typeof toDatabase>;
