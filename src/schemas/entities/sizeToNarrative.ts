import { enumLookup } from '../valueTypes/enums/inverseEnum';
import { Sizes } from '../valueTypes/enums/sizes';
import { SizeMemory } from './size';

export function sizeToNarrative(data: SizeMemory) {
    return {
        ...data,
        value: data.value == null
            ? undefined
            : parseInt(data.value, 10),
        output: data.value == null ||
            enumLookup(Sizes)(data.value) == null
            ? ([] as string[])
            : ([enumLookup(Sizes)(data.value)] as string[])
    };
}
