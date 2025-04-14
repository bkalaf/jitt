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

const toMemory = z
    .object({
        barcodeType: BarcodeTypes.default('unknown'),
        value: z
            .string()
            .max(13, 'Must be less than 13 characters.')
            .default('0000000000000')
            .transform((val) => val.padStart(13, '0')),
        isValid: z.boolean().default(false)
    })
    .transform((data) => {
        const bcs = classifyBarcode(data.value);
        const { isValid, barcodeType, value } = bcs.filter(
            (x) => x.value === data.value
        )[0];
        return {
            value: isValid ? formatBarcode({ barcodeType, value }) : '',
            isValid,
            barcodeType
        } as typeof data;
    });

const toDatabase = z.object({
    barcodeType: BarcodeTypes.default('unknown'),
    value: z.preprocess(
        (val) =>
            ['-', ' ']
                .map((s) => (s2: string) => s2.replaceAll(s, ''))
                .reduce(
                    (pv, cv) => cv(pv),
                    val == null ? ('' as string) : (val as string)
                )
                .padStart(13, '0'),
        z
            .string()
            .max(13, 'Must be less than 13 characters.')
            .default('0000000000000')
    ),
    isValid: z.boolean().default(false)
});

export default {
    toMemory,
    toDatabase
};

export type IndividualBarcodeMemory = z.infer<typeof toMemory>;
export type IndividualBarcodeDatabase = z.infer<typeof toDatabase>;
