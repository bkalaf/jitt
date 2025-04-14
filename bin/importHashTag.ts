import fs from 'graceful-fs';
import cp from 'child_process';

const JSON_DATA = JSON.parse(fs.readFileSync('/home/bobby/repos/jitt/data/hashTag.json').toString()) as {
        _id: string;
        name: string;
        usage: {
            from: string;
            count: number;
        }[];
    }[];

JSON_DATA.forEach((record) => {
    console.log(`record`, record);
    const { name, usage, _id } = record;
    const textString = `{ "_id": "${_id}", "name": "${name}", "usage": ${JSON.stringify(
        usage.map(({ from, count }) => ({
            from,
            count
        }))
    )} }`;
    console.log(`textString`, textString);
    cp.spawnSync('./bin/runCurl.sh', ['POST', 'hashTag', textString], {});
});
