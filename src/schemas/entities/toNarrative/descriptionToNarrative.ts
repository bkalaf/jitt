import { toKVP } from '../../../util/toKVP';

export function descriptionToNarrative(description?: string) {
    return toKVP('Description')(description);
}