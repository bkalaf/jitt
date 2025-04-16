import { FabricTypes } from '../valueTypes/enums/fabricTypes';
import { enumLookup } from '../valueTypes/enums/inverseEnum';
import { MadeOfMemory } from './madeOf';

export function madeOfToNarrative(data: MadeOfMemory) {
    return {
        ...data,
        output: (() => {
            const lookup = enumLookup(FabricTypes);
            switch (data.kind) {
                case 'single-section':
                    const subTotal = Object.entries(data.value)
                        .map(([k, v]) => lookup(k as any) != null && lookup(k as any) !== ''
                            ? [
                                [
                                    lookup(k as any),
                                    v.toString().concat('%')
                                ].join(': ')
                            ]
                            : []
                        )
                        .reduce((pv, cv) => [...pv, ...cv], [])
                        .join('\n');
                    return [subTotal];
                case 'multi-section':
                    const subSubTotal = Object.entries(data.value).map(
                        ([name, vl]) => [
                            name.toUpperCase().concat(':'),
                            Object.entries(vl)
                                .map(([k, v]) => lookup(k as any) != null &&
                                    lookup(k as any) !== ''
                                    ? [
                                        [
                                            lookup(k as any),
                                            v.toString().concat('%')
                                        ].join(': ')
                                    ]
                                    : []
                                )
                                .reduce((pv, cv) => [...pv, ...cv], [])
                                .map((x) => ' -'.concat(x))
                                .join('\n')
                        ].join('\n')
                    );
                    return [subSubTotal.join('\n')];
                case 'empty':
                    return [];
            }
        })()
    };
}
