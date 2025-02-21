import fs from 'graceful-fs';

const entityFileName = '/home/bobby/repos/jitt/bin/entity.list';

function standardizeNewLines(text: string) {
    return text.replaceAll('\r\n', '\n').replaceAll('\r', '\n').split('\n');
}
function addEntity(list: string[], next: string) {
    const nextList = [...list, next].sort((a, b) => a.localeCompare(b));
    fs.writeFileSync(entityFileName, nextList.join('\n'))
    return nextList;
}

const entityList = standardizeNewLines(fs.readFileSync(entityFileName).toString())
const nextEntity = process.argv[2];
const list = addEntity(entityList, nextEntity);

function forEachEntity(func: (x: string) => string) {
    const text = list.map(item => func(item)).join('\n');
    return text.endsWith(',') ? text.substring(0, text.length - 1) : text;
}

const columnsIndex = `${forEachEntity(item => `import { columns as ${item} } from './${item}';`)}    

export default {
${forEachEntity(x => `    ${x},`)}
}`


const initIndex = `${forEachEntity(item => `import { init as ${item} } from './${item}';`)}    

export default {
${forEachEntity(x => `    ${x},`)}
}`

const InsertFormsIndex = `${forEachEntity(item => `import { InsertForm as ${item} } from './${item}';`)}    

export default {
${forEachEntity(x => `    ${x},`)}
}`

const xformIndex = `${forEachEntity(item => `import { ${item}Convert, ${item}Transform } from './${item}';`)}

const convertIn = {
${forEachEntity(item => `    ${item}: ${item}Transform,`)}
}

const convertOut = {
${forEachEntity(item => `    ${item}: ${item}Convert,`)}
}

export default {
    convertIn,
    convertOut
}`;

fs.writeFileSync('/home/bobby/repos/jitt/src/schema/columns/index.ts', columnsIndex);
fs.writeFileSync('/home/bobby/repos/jitt/src/schema/init/index.ts', initIndex);
fs.writeFileSync('/home/bobby/repos/jitt/src/schema/InsertForms/index.ts', InsertFormsIndex);
fs.writeFileSync('/home/bobby/repos/jitt/src/schema/xforms/index.ts', xformIndex);