///<reference path="./../src/global.d.ts" />
import { surround, surroundDoubleQuotes } from '../src/common/addPrefix';
import fs from 'graceful-fs';
import { getRecordFor } from '../src/util/getIDFor';
import { checkUndef } from '../src/util/checkUndef';
import { PersonRoles } from '../src/schemas/enums/personRoles';

async function doThis(record: {
    _id: string;
    role?: string;
    prefix?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    suffix?: string;
    regex?: string;
}) {
    try {
        console.log(`record`, record);
        const { regex, firstName, middleName, lastName, prefix, suffix, role, _id } = record;
        const $roles = PersonRoles.safeParse(role).success ? [role] : [];
        const textString = surround(
            '{',
            '}'
        )(
            [
                ['_id', _id].map(surroundDoubleQuotes),
                ...checkUndef('regex', regex),
                ...checkUndef('suffix', suffix),
                ...checkUndef('firstName', firstName),
                ...checkUndef('middleName', middleName),
                ...checkUndef('lastName', lastName),
                ...checkUndef('prefix', prefix),
                ...checkUndef('roles', $roles),
                ...checkUndef('credentials', [])
            ]
                .map((x) => x.join(': '))
                .join(',\n')
        );
        console.log(`textString`, textString);

        const response = await fetch(
            'http://localhost:3000/api/data/v1/person',
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
                role?: string;
                prefix?: string;
                firstName?: string;
                middleName?: string;
                lastName?: string;
                suffix?: string;
                regex?: string;
            },
            Response
        ];
    } catch (error) {
        fs.appendFileSync('/home/bobby/repos/jitt/fatal-error.json', JSON.stringify(record));
        throw error;
    }
}
async function run() {
    for await (const result of (
        JSON.parse(
            fs
                .readFileSync('/home/bobby/repos/jitt/data/person.json')
                .toString()
        ) as {
            _id: string;
            role?: string;
            prefix?: string;
            firstName?: string;
            middleName?: string;
            lastName?: string;
            suffix?: string;
            regex?: string;
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
