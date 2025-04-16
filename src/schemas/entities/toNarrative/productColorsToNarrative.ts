import { toKVP, toList } from '../../../util/toKVP';
import { enumLookup } from '../../valueTypes/enums/inverseEnum';
import { ProductColors } from '../../valueTypes/enums/productColors';

export const productColorsToNarrative = (data: ProductColors[]) =>
    toList(data.length > 1 ? 'Color' : 'Color', ' & ')(data);
// toKVP(data.length > 1 ? 'Color' : 'Color')(
//     data.map(enumLookup(ProductColors)).join(' & ')
// );
