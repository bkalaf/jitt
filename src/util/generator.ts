import { getCheckdigitFor } from './barcode.js';

export function getNextBarcode(type: 'sku' | 'locator') {
    const [func1, func2] = type === 'sku' ? [Math.max, (x: number) => x + 1] : [Math.min, (x: number) => x - 1];
    return function (group: BarcodeGroup): [string, BarcodeGroup] {
        const currentGroup = func1(...group.group);
        const result = [group.leading, currentGroup.toFixed(0).padStart(5, '0'), group.current.toFixed(0).padStart(5, '0')].join('');
        const checkdigit = getCheckdigitFor(result);
        const bc = [result, checkdigit].join('');
        const nextGroup = group.current === 99999 ? { ...group, group: [...group.group, func2(currentGroup)], current: 0 } as BarcodeGroup : { ...group, current: group.current + 1 } as BarcodeGroup;
        return [bc, nextGroup];
    };
}