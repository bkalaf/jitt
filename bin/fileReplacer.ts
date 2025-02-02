import fs from 'fs';
import { camelCaseToProper } from '../src/common/text/splitStringAt';

const filename = process.argv[2];
const collectionName = process.argv[3];
const typeName = camelCaseToProper(collectionName).split(' ').join('');

function replaceAll(toFind: string, replacer: string, data: string) {
    if (data.includes(toFind)) {
        return replaceAll(toFind, replacer, data.replace(toFind, replacer));
    }
    return data;
}

const data = replaceAll('@@TYPENAME@@', typeName, replaceAll('@@COLLECTIONNAME@@', collectionName, fs.readFileSync(filename).toString()));

fs.writeFileSync(filename, data);