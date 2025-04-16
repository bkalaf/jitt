import { countries } from '../schemas/valueTypes/enums/countries';
import { provinces, provincesToGroup } from '../schemas/valueTypes/enums/provinces';
import { surroundQuotes } from '../common/addPrefix';
import { groupBy } from '../common/groupBy';

// const printKeys = (obj: { value: string }[]) => obj.map(x => x.value).map(surroundQuotes).join(' | ');

// console.log(printKeys(countries));
// console.log(printKeys(provinces));

const master = new Map();
for (const [key, value] of [...Object.entries(provinces)]) {
    master.set(value, { value: value, label: key });
}
for (const [key, group] of [...Object.entries(provincesToGroup)]) {
    master.set(key, { ...master.get(key), group })
}
const p = groupBy<{ group: string[], value: string, label: string }>('group')(Array.from(master.values()));

console.log(
    p['CA'].map(({ value, label }) => `'${label}': "${value}",`).join('\n')
);

