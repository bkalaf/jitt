import { z } from 'zod';
import { toProperCase } from '../common/toTitleCase';
import { Flags } from '../schemas/enums/flags';
import { enumLookup } from '../schemas/enums/inverseEnum';
import './../preload';

export function toKVP(key: string) {
    return (value?: string) =>
        value == null || value === ''
            ? []
            : [[toProperCase(key), value].join(': ')];
}

export function toList(key: string, delimiter = '\n') {
    return (value?: string[]) =>
        value == null || value.length === 0
            ? []
            : [
                  [
                      toProperCase(key).concat(':'),
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
                  toProperCase(key)
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
        return toFlatList<T>(key, (enumValue) =>
            enumLookup<U>(obj)(enumValue as any)
        )(
            pathToValue.reduce((pv, cv) => {
                if (pv == null) return undefined;
                if (!(cv in pv)) return undefined;
                return pv[cv as keyof typeof pv] as any;
            }, data) as any as T[]
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
