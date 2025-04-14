///<reference path="./../src/global.d.ts" />
import { DropdownMemory } from '../src/schemas/entities/dropdown';
import { toProperCase } from '../src/common/toTitleCase';
import { surroundDoubleQuotes } from '../src/common/addPrefix';
import fs from 'graceful-fs';
async function run() {
    const response = await fetch('http://localhost:3000/api/data/v1/dropdown');
    const dropdowns: DropdownMemory[] = await response.json();
    return dropdowns.filter(x => x.enumType === 'cuffTypes').map(({ enumType, values }) => {
        console.log(enumType);
        const enumName = toProperCase(enumType).replaceAll(' ', '');
        const sample = values[0];

        const hasRegex = values.some(x => x.regex.length > 0);
        const hasGroup = values.some((x) => x.group != null && x.group.length > 0);
        const hasSelector = values.some((x) => x.selector.length > 0);
        const hasImage = values.some((x) => x.image.length > 0);
        const text = `export const ${enumType} = {
${values
            .map(({ label, value }) =>
                '\t'.concat([label, value].map(surroundDoubleQuotes).join(': '))
            )
            .join(',\n')}
} as const;`;

        const text2 = hasRegex
            ? `export const ${enumType}ToRegex = {
${values
            .map(({ regex, value }) =>
            '\t'.concat([value, regex].map(surroundDoubleQuotes).join(': '))
            )
            .join(',\n')}
} as const;`
            : undefined;

        const text2d = hasGroup
            ? `export const ${enumType}ToGroup = {
${values
    .map(({ group, value }) =>
        '\t'.concat([surroundDoubleQuotes(value), JSON.stringify(group)].join(': '))
    )
    .join(',\n')}
} as const;`
            : undefined;

            const text2b = hasSelector
                ? `export const ${enumType}ToSelector = {
${values
    .map(({ selector, value }) =>
        '\t'.concat([value, selector].map(surroundDoubleQuotes).join(': '))
    )
    .join(',\n')}
} as const;`
                : undefined;

                const text2c = hasImage
                    ? `export const ${enumType}ToImage = {
${values
    .map(({ image, value }) =>
        '\t'.concat([value, image].map(surroundDoubleQuotes).join(': '))
    )
    .join(',\n')}
} as const;`
                    : undefined;
        const textBottom = `export const ${enumName} = z.nativeEnum(${enumType});
export type ${enumName} = z.infer<typeof ${enumName}>;`;

        const fulltext = ['import { z } from "zod";', text, text2, text2b, text2c, text2d, textBottom].filter((x) => x != null).join('\n');
        fs.writeFileSync(`/home/bobby/repos/jitt/src/schemas/enums/${enumType}.ts`, fulltext);
        // return [text, text2, textBottom].filter((x) => x != null).join('\n\n');
    });
}

run();

