import { z } from 'zod';
import { toProperCase } from '../common/toTitleCase';
import { Flags } from '../schemas/valueTypes/enums/flags';
import { enumLookup } from '../schemas/valueTypes/enums/inverseEnum';
import './../preload';

export function toKVP(key: string) {
    return (value?: string) =>
        value == null || value === ''
            ? []
            : [[key, value].join(': ')];
}

export function toList(key: string, delimiter = '\n') {
    return (value?: string[]) =>
        value == null || value.length === 0
            ? []
            : [
                  [
                      key.concat(':'),
                      ...value.map((x) => ' * '.concat(x))
                  ].join(delimiter)
              ];
}
export function toFlatList<T>(
    key: string,
    func: (x: T) => string | undefined,
    delimiter = ', '
) {
    return (value?: T[]) =>
        value == null || value.length === 0
            ? []
            : [
                 key
                      .concat(': ')
                      .concat(
                          value
                              .map(func)
                              .filter((x) => x != null)
                              .join(delimiter)
                      )
              ];
}

export const toEnumList =
    <TZod extends Record<string, any>>(data: any, ...pathToValue: string[]) =>
    <T extends string, U extends Record<string, T>>(
        key: string,
        obj: z.ZodNativeEnum<U>
    ) => {
        const subTotal = pathToValue.reduce((pv, cv) => {
            if (pv == null) return undefined;
            if (!(cv in pv)) return undefined;
            return pv[cv as keyof typeof pv] as any;
        }, data) as any;
        return toFlatList<T>(key, (enumValue) =>
            enumLookup<U>(obj)(enumValue as any)
        )(
            Array.isArray(subTotal)
                ? (subTotal as any as T[])
                : subTotal == null || subTotal.length === 0
                ? []
                : [subTotal]
        );
    };

export function toCallout(value: Flags) {
    return (flags: Flags[] = []) =>
        flags.includes(value)
            ? enumLookup(Flags)(value) == null
                ? []
                : [['+ ', enumLookup(Flags)(value)].join('')]
            : [];
}
