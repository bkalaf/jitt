///<reference path="./../src/global.d.ts" />
import { surround, surroundDoubleQuotes } from '../src/common/addPrefix';
import fs from 'graceful-fs';
import { getRecordFor } from '../src/util/getIDFor';
import { checkUndef } from '../src/util/checkUndef';
import { MediaTypes } from '../src/schemas/enums/mediaTypes';

async function doThis(record: {
    _id: string;
    timestamp: string;
    category: {
        selector: string;
        name: string;
    };
    subCategory: {
        selector: string;
        name: string;
    };
    subSubCategory: {
        selector: string;
        name: string;
    };
}) {
    try {
        console.log(`record`, record);
        const { timestamp, category, subCategory, subSubCategory, _id } = record;
        const textString = surround(
            '{',
            '}'
        )(
            [
                ['_id', _id].map(surroundDoubleQuotes),
                ...checkUndef('category', category),
                ...checkUndef('subCategory', subCategory),
                ...checkUndef('subSubCategory', subSubCategory),
                ...checkUndef('timestamp', timestamp)
            ]
                .map((x) => x.join(': '))
                .join(',\n')
        );
        console.log(`textString`, textString);

        const response = await fetch(
            'http://localhost:3000/api/data/v1/mercariTaxonomy',
            {
                method: 'POST',
                body: textString,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return [record, response] as [
            {
                _id: string;
                brand?: string;
                description?: string;
                regex?: string;
            },
            Response
        ];
    } catch (error) {
        fs.appendFileSync(
            '/home/bobby/repos/jitt/fatal-error.json',
            JSON.stringify(record)
        );
        throw error;
    }
}
async function run() {
    for await (const result of (
        JSON.parse(
            fs
                .readFileSync(
                    '/home/bobby/repos/jitt/data/mercariTaxonomy.json'
                )
                .toString()
        ) as {
            _id: string;
            timestamp: string;
            category: {
                selector: string;
                name: string;
            };
            subCategory: {
                selector: string;
                name: string;
            };
            subSubCategory: {
                selector: string;
                name: string;
            };
        }[]
    ).map(doThis)) {
        const [rec, res] = result;
        if (!res.ok) {
            fs.appendFileSync(
                '/home/bobby/repos/jitt/errors.json',
                JSON.stringify(rec)
            );
        }
    }
}

const r = run();
