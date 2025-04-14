import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import address from './address';
import selfStorage from './selfStorage';
import { surround } from '../../common/addPrefix';

const { toMemory: addressMemory, toDatabase: addressDatabase } = address;
const { toMemory: selfStorageMemory, toDatabase: selfStorageDatabase } =
    selfStorage;

const toMemory = z
    .object({
        _id: $objectId.memory,
        address: addressMemory.optional(),
        facilityNumber: z.string().optional().default(''),
        emailAddress: z.string().email().optional().default(''),
        phoneNumber: z
            .string()
            .regex(/\+1[0-9]{10}/, 'Value must be in format +1XXXXXXXXXXX')
            .optional()
            .default(''),
        selfStorage: selfStorageMemory
    })
    .transform(({ address, selfStorage, phoneNumber, ...rest }) => {
        const name = [
            selfStorage?.name,
            address ? [address.city, address.province].join(', ') : undefined,
            address
                ? address.mailing1?.split(' ').slice(1).join(' ')
                : undefined
        ]
            .filter((x) => x != null)
            .join(' - ');
        const truncPhoneNumber = phoneNumber?.slice(2);
        const formattedPhoneNumber = truncPhoneNumber
            ? [
                  surround('(', ')')(truncPhoneNumber.slice(0, 3)),
                  truncPhoneNumber.slice(3, 6),
                  '-',
                  truncPhoneNumber.slice(6, 10)
              ].join('')
            : '';
        return {
            ...rest,
            name,
            address,
            selfStorage,
            phoneNumber: formattedPhoneNumber
        };
    });

const phoneNumberDB = z.preprocess((data, ctx) => {
    if (typeof data !== 'string') {
        ctx.addIssue({
            code: z.ZodIssueCode.invalid_type,
            expected: 'string',
            received: typeof data
        });
        return z.NEVER;
    }
    if (data === '') return undefined;
    const solution = '+1'.concat(
        [' ', '-', '(', ')']
            .map((x) => (s: string) => s.replaceAll(x, ''))
            .reduce((pv, cv) => cv(pv), data.replaceAll('+1', ''))
    );
    if (!/\+1[0-9]{10}/.test(solution)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Value must be in format +1XXXXXXXXXXX'
        });
        return z.NEVER;
    }
    return solution;
}, z.string().optional());

const toDatabase = z.object({
    _id: $objectId.database,
    selfStorage: $fk.toDatabase(selfStorageDatabase),
    address: addressDatabase.optional(),
    facilityNumber: z
        .string()
        .nonempty()
        .optional()
        .transform((val) => (val === '' ? undefined : val)),
    emailAddress: z
        .string()
        .email()
        .optional()
        .transform((val) => (val === '' ? undefined : val)),
    phoneNumber: phoneNumberDB
});

export default {
    toMemory,
    toDatabase
};

export type FacilityMemory = z.infer<typeof toMemory>;
export type FacilityDatabase = z.infer<typeof toDatabase>;
