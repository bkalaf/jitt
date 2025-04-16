import { z } from 'zod';
import { formatBarcode } from '../../../util/formatBarcode';
import { classifyBarcode } from '../../../util/barcode';

const toMemory = z
    .string()
    .regex(/^[0-9]{13}$/, 'Must be a 13 character long numeric-only string')
    .default('0000000000000')
    .transform(val => {
        const barcodes = classifyBarcode(val as string);
        const result = barcodes.find(x => x.value === val);
        return result != null ? result.isValid ? formatBarcode({ barcodeType: result.barcodeType, value: val }) : '!'.concat(result.value).concat('!') : '!'.concat(val).concat('!');
    })
const toDatabase = z.preprocess(
    (val) => (val === null || val == '' ? undefined : val),
    z
        .string()
        .regex(/^[0-9]{13}$/, 'Must be a 13 character long numeric-only string')
        .transform(val => val.replaceAll('-', '').padStart(13, '0'))
);

export type UPCMemory = z.infer<typeof toMemory>;
export type UPCDatabase = z.infer<typeof toDatabase>;

export default {
    toMemory,
    toDatabase
};
