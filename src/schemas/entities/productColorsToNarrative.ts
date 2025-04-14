import { toKVP } from '../../util/toKVP';
import { enumLookup } from '../enums/inverseEnum';
import { ProductColors } from '../enums/productColors';

export function productColorsToNarrative(data: ProductColors[]) {
    return {
        ...data,
        output: toKVP(data.length > 1 ? 'Color' : 'Color')(
            data.map(enumLookup(ProductColors)).join(' & ')
        )
    };
}
