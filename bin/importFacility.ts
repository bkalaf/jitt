///<reference path="./../src/global.d.ts" />
import { surround, surroundDoubleQuotes } from '../src/common/addPrefix';
import fs from 'graceful-fs';
import { AddressMemory } from '../src/schemas/entities/address';
import { getRecordFor } from '../src/util/getIDFor';
import { checkUndef } from '../src/util/checkUndef';

Promise.all(
    (
        JSON.parse(
            fs
                .readFileSync('/home/bobby/repos/jitt/data/facility.json')
                .toString()
        ) as {
            _id: string;
            address: AddressMemory;
            selfStorage: string;
            phoneNumber?: string;
            emailAddress?: string;
            facilityNumber?: string;
        }[]
    ).map(async (record) => {
        console.log(`record`, record);
        const {
            address,
            selfStorage,
            phoneNumber,
            emailAddress,
            facilityNumber,
            _id
        } = record;
        const $selfStorage = await getRecordFor<{}>('selfStorage', selfStorage);
        const textString = surround(
            '{',
            '}'
        )(
            [
                ['_id', _id].map(surroundDoubleQuotes),
                ...checkUndef('facilityNumber', facilityNumber),
                ...checkUndef('emailAddress', emailAddress),
                ...checkUndef('phoneNumber', phoneNumber),
                [
                    surroundDoubleQuotes('selfStorage'),
                    JSON.stringify($selfStorage)
                ],
                [
                    surroundDoubleQuotes('address'),
                    surround(
                        '{',
                        '}'
                    )(
                        [
                            ...checkUndef('mailing1', address?.mailing1),
                            ...checkUndef('suite', address?.suite),
                            ...checkUndef('city', address?.city),
                            ...checkUndef('province', address?.province),
                            ...checkUndef('country', address?.country),
                            ...checkUndef('postalCode', address?.postalCode)
                        ]
                            .map((x) => x.join(': '))
                            .join(',\n')
                    )
                ]
            ]
                .map((x) => x.join(': '))
                .join(',\n')
        );
        console.log(`textString`, textString);

        return fetch('http://localhost:3000/api/data/v1/facility', {
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
