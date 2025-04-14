import { zodToJsonSchema } from 'zod-to-json-schema';
import $selfStorage from './../src/schemas/entities/selfStorage';
import $mercariBrand from './../src/schemas/entities/mercariBrand';
import $brand from './../src/schemas/entities/brand';
import fs from 'graceful-fs';

const selfStorage = $selfStorage.toDatabase;
const mercariBrand = $mercariBrand.toDatabase;
const brand = $brand.toDatabase;

const schemas = {
    selfStorage: zodToJsonSchema(selfStorage, 'selfStorage'),
    mercariBrand: zodToJsonSchema(mercariBrand, 'mercariBrand'),
    brand: zodToJsonSchema(brand, 'brand')
}

console.log(schemas);

fs.writeFileSync('/home/bobby/repos/jitt/jsonSchemas.json', JSON.stringify(schemas))