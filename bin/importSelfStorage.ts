///<reference path="./../src/global.d.ts" />
import { surround, surroundDoubleQuotes } from '../src/common/addPrefix';
import fs from 'graceful-fs';

Promise.all(
    (
        JSON.parse(
            fs
                .readFileSync('/home/bobby/repos/jitt/data/selfStorage.json')
                .toString()
        ) as {
            _id: string;
            name: string;
            website?: string;
        }[]
    ).map((record) => {
        console.log(`record`, record);
        const { name, website, _id } = record;
        const textString = surround(
            '{',
            '}'
        )(
            [
                ['_id', _id].map(surroundDoubleQuotes),
                ['name', name].map(surroundDoubleQuotes),
                ...(website
                    ? [['website', website].map(surroundDoubleQuotes)]
                    : [])
            ]
                .map((x) => x.join(': '))
                .join(',\n')
        );
        console.log(`textString`, textString);

        return fetch('http://localhost:3000/api/data/v1/selfStorage', {
            method: 'POST',
            body: textString,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    })
)
    .then((arr) => {
        const falses = arr.map((x) => !x.ok);
        console.log(arr);
        console.log(`${falses} errors.`);
    })
    .finally(() => console.log('DONE!'));
