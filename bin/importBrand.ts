///<reference path="./../src/global.d.ts" />
import fs from 'graceful-fs';
import cp from 'child_process';
import { surroundDoubleQuotes, surroundQuotes } from '../src/common/addPrefix';

const JSON_DATA = JSON.parse(fs.readFileSync('/home/bobby/repos/jitt/data/brand.json').toString()) as {
        _id: string;
        name: string;
        regex?: string;
        timestamp?: string;
        mercariBrand?: string;
    }[];

async function getMB<T>(id?: string): Promise<T | undefined> {
    if (id == null) return Promise.resolve(undefined);
    const response = await fetch(`http://localhost:3000/api/data/v1/mercariBrand/${id}`);
    return await response.json() as T
}

async function checkBrand<T>(id?: string): Promise<T | undefined> {
    if (id == null) return Promise.resolve(undefined);
    const response = await fetch(
        `http://localhost:3000/api/data/v1/brand/${id}`
    );
    console.log(`response: `);
    console.log(response);
    const body = await response.json();
    console.log(`body:`);
    console.log(body);
    return response.status === 404 ? undefined : body;
}

async function run() {
    console.log(JSON.stringify(JSON_DATA, null, '\t'))
    for (const record of JSON_DATA) {
        const exists = await checkBrand(record._id);
        if (!exists) {
            try {
                console.log(`record`, record);
                const { name, regex, timestamp, mercariBrand, _id } = record;
                const mb = await getMB<{ _id: string }>(mercariBrand);
                const text = [
                    ['"_id"', surroundDoubleQuotes(_id)].join(': '),
                    ['"name"', surroundDoubleQuotes(name)].join(': '),
                    regex
                        ? ['"regex"', surroundDoubleQuotes(regex)].join(': ')
                        : undefined,
                    timestamp
                        ? ['"timestamp"', surroundDoubleQuotes(timestamp)].join(
                              ': '
                          )
                        : [
                              '"timestamp"',
                              surroundDoubleQuotes(
                                  new Date(Date.now()).toISOString()
                              )
                          ].join(': '),
                    mb
                        ? ['"mercariBrand"', JSON.stringify(mb)].join(': ')
                        : undefined
                ]
                    .filter((x) => x != null)
                    .join(',\n');
                const textString = `{ ${text} }`;
                console.log(`textString`, textString);
                const response = await fetch('http://localhost:3000/api/data/v1/brand', {
                    body: textString,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                console.log(`RESULT: ok ${response.ok}`);
                // cp.spawnSync(
                //     './bin/runCurl.sh',
                //     ['POST', 'brand', textString],
                //     {}
                // );
            } catch (error) {
                const text = [(error as Error).message, JSON.stringify(record, null, '\t')].join('\n');
                fs.appendFileSync('/home/bobby/repos/jitt/errors.txt', text.concat('\n'));
            }
        }        
    }
}
// JSON_DATA.forEach((record) => {
//     console.log(`record`, record);
//     const { name, regex, timestamp, mercariBrand, _id } = record;
//     const mb = mercariBrand == null ? undefined : fetch(`http://localhost:3000/api/data/v1/mercariBrand/${mercariBrand}`)
//     const text = [
//         ['"_id"', surroundDoubleQuotes(_id)].join(': '),
//         ['"name"', surroundDoubleQuotes(name)].join(': '),
//         regex ? ['"regex"', surroundDoubleQuotes(regex)].join(': ') : undefined,
//         timestamp ? ['"timestamp"', surroundDoubleQuotes(timestamp)].join(': ') : undefined,

//     ]
//     const textString = `{ "_id": "${_id}", "name": "${name}", "regex": "${regex}" }`;
//     console.log(`textString`, textString);
//     cp.spawnSync('./bin/runCurl.sh', ['POST', 'hashTag', textString], {});
// });

const runner = run().finally(() => console.log('DONE!'));
