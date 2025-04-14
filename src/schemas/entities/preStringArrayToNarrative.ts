import { toList } from '../../util/toKVP';

export function preStringArrayToNarrative(key: string) {
    return function stringArrayToNarrative(data: string[]) {
        return {
            ...data,
            output: toList(key)(data == null || data.length === 0 ? [] : data)
        };
    };
}
