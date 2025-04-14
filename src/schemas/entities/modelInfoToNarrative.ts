import { toKVP } from '../../util/toKVP';
import { ModelInfoMemory } from './modelInfo';

export function modelInfoToNarrative(data: ModelInfoMemory) {
    return {
        ...data,
        output: [
            ...toKVP('Model Name')(data?.modelName),
            ...toKVP('Model #')(data?.modelNumber)
        ]
    };
}
