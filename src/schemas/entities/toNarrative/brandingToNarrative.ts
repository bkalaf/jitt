import { toKVP } from '../../../util/toKVP';
import { BrandMemory } from '../brand';
import { BrandingMemory } from '../branding';
import { ProductLineMemory } from '../productLine';

export function brandingMemoryToNarrative(data?: BrandingMemory) {
    return data == null
        ? []
        : data.kind === 'brand'
        ? toKVP('Brand')(data.value.name)
        : data.kind === 'productLine'
        ? toKVP('Brand')(data.value.name)
        : [];
}
