import { ObjectId } from 'mongodb';
import { getCheckdigitFor } from '../util/barcode';

function incrBarcode(mathFunc: (...args: number[]) => number, incrFunc: (x: number) => number) {
    return function ({ leading, group, current }: IGeneratorSection): IGeneratorSection {
        let nextCurrent = current + 1;
        let currentGroup = mathFunc(...group);
        if (nextCurrent === 100000) {
            nextCurrent = 0;
            group.push(incrFunc(currentGroup));
        }
        return {
            leading,
            group,
            current: nextCurrent
        };
    };
}
function getBarcode(mathFunc: (...args: number[]) => number) {
    return function ({ leading, group, current }: IGeneratorSection) {
        let currentGroup = mathFunc(...group);
        const bc = [leading.toFixed(0), currentGroup.toFixed(0).padStart(5, '0'), current.toFixed(0).padStart(5, '0')].join('');
        const withCd = [bc, getCheckdigitFor(bc)].join('');
        return withCd.padStart(13, '0');
    };
}
export type IGeneratorSection = {
    leading: number;
    group: number[];
    current: number;
};
export type IBarcodeGenerator = {
    _id: ObjectId;
    locator: IGeneratorSection;
    sku: IGeneratorSection;
};
// console.log(getBarcode(Math.min)({ leading: 4, group: [1], current: 99 }))
// console.log(getBarcode(Math.max)({ leading: 4, group: [1, 2], current: 100 }));
// console.log(incrBarcode(Math.max, x => x + 1)({ leading: 4, group: [1, 2], current: 100 }));
// console.log(incrBarcode(Math.max, (x) => x + 1)({ leading: 4, group: [1, 2], current: 99999 }));
