import JSON_DATA from '../data/mercariBrand.json';
import cp from 'child_process';

(
    JSON_DATA as {
        _id: string;
        name: string;
        regex?: string;
        id?: number;
        timestamp?: string;
    }[]
).map((record) => {
    console.log(`record`, record);
    const { name, id, timestamp, _id } = record;
    const textString = `{ "_id": "${_id}", "name": "${name}", "id": ${id}, "timestamp": "${timestamp}" }`;
    console.log(`textString`, textString);
    cp.spawnSync('./bin/runCurl.sh', ['POST', 'mercariBrand', textString], {});
});
