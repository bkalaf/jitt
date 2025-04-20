import { GraphQLScalarType, Kind, ObjectValueNode, ValueNode } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ObjMap } from 'graphql/jsutils/ObjMap';
import { ObjectId } from 'mongodb';
import { truncateToString } from './common/truncate.js';

export const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        if (value instanceof Date) {
            return value.toISOString(); // Convert outgoing Date to integer for JSON
        }
        throw Error('GraphQL Date Scalar serializer expected a `Date` object');
    },
    parseValue(value) {
        if (typeof value === 'string') {
            return new Date(Date.parse(value)); // Convert incoming integer to Date
        }
        throw new Error('GraphQL Date Scalar parser expected a `number`');
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            // Convert hard-coded AST string to integer and then to Date
            return new Date(Date.parse(ast.value));
        }
        // Invalid hard-coded value (not an integer)
        return null;
    }
});

const phoneNumberRegExp = /^\+1[0-9]{10}$/
export const phoneNumberScalar = new GraphQLScalarType({
    name: 'PhoneNumber',
    description: 'A valid telephone number',
    serialize(value): string {
        if (typeof value === 'string') {
            if (phoneNumberRegExp.test(value)) {
                return value;
            }
            throw new Error('Does not match validation string.')
        }
        throw new Error('GraphQL parser expected a `string`.')
    },
    parseValue(value): string {
        if (typeof value === 'string') {
            if (phoneNumberRegExp.test(value)) {
                return value;
            }
            throw new Error('Does not match validation string.');
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseLiteral(ast): string | null {
        if (ast.kind === Kind.STRING) {
            return ast.value;
        }
        return null;
    }
})

const urlRegExp = /^https?:\/\/(.+[.])+.+(\/.+)\/?$/;
export const urlScalar = new GraphQLScalarType({
    name: 'Url',
    description: 'A valid url',
    serialize(value): string {
        if (typeof value === 'string') {
            if (urlRegExp.test(value)) {
                return value;
            }
            throw new Error('Does not match validation string.');
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseValue(value): string {
        if (typeof value === 'string') {
            if (urlRegExp.test(value)) {
                return value;
            }
            throw new Error('Does not match validation string.');
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseLiteral(ast): string | null {
        if (ast.kind === Kind.STRING) {
            return ast.value;
        }
        return null;
    }
});

const emailRegExp = /^[A-Za-z0-9-_.]+@([A-Za-z0-9-_]+[.])+[A-Za-z0-9-_]+$/;
export const emailScalar = new GraphQLScalarType({
    name: 'Email',
    description: 'A valid e-mail',
    serialize(value): string {
        if (typeof value === 'string') {
            if (emailRegExp.test(value)) {
                return value;
            }
            throw new Error('Does not match validation string.');
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseValue(value): string {
        if (typeof value === 'string') {
            if (emailRegExp.test(value)) {
                return value;
            }
            throw new Error('Does not match validation string.');
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseLiteral(ast): string | null {
        if (ast.kind === Kind.STRING) {
            return ast.value;
        }
        return null;
    }
});

const postalCodeRegExp =
    /^[0-9]{5}(-?[0-9]{4})?$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/;
export const postalCodeScalar = new GraphQLScalarType({
    name: 'Email',
    description: 'A valid e-mail',
    serialize(value): string {
        if (typeof value === 'string') {
            if (postalCodeRegExp.test(value)) {
                return value;
            }
            throw new Error('Does not match validation string.');
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseValue(value): string {
        if (typeof value === 'string') {
            if (postalCodeRegExp.test(value)) {
                return value;
            }
            throw new Error('Does not match validation string.');
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseLiteral(ast): string | null {
        if (ast.kind === Kind.STRING) {
            return ast.value;
        }
        return null;
    }
});
export const objectIdScalar = new GraphQLScalarType({
    name: 'ObjectId',
    description: 'A mongdb objectId',
    serialize(value): string {
        if (typeof value === 'string') {
            return value;
        }
        if (value instanceof ObjectId) {
            return value.toHexString();
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseValue(value): ObjectId {
        if (typeof value === 'string') {
            return new ObjectId(value);
        }
        throw new Error('GraphQL parser expected a `string`.');
    },
    parseLiteral(ast): ObjectId | null {
        if (ast.kind === Kind.STRING) {
            return new ObjectId(ast.value);
        }
        return null;
    }
});

export function parseObject(
    typeName: string,
    ast: ObjectValueNode,
    variables: Maybe<ObjMap<unknown>>
) {
    const value = Object.create(null) as Record<string, any>;
    ast.fields.forEach((field) => {
        value[field.name.value] = parseLiteral(typeName, field.value, variables);
    })
    return value;
}
export function parseLiteral(
    typeName: string,
    ast: ValueNode,
    variables: Maybe<ObjMap<unknown>>
):
    | string
    | number
    | boolean
    | Array<string | number | boolean | Record<string, any> | []>
    | Record<string, any>
    | null {
    switch (ast.kind) {
        case Kind.INT:
        case Kind.FLOAT:
            return parseFloat(ast.value);
        case Kind.STRING:
            return ast.value;
        case Kind.BOOLEAN:
            return ast.value;
        case Kind.NULL:
            return null;
        case Kind.ENUM:
            return ast.value;
        case Kind.LIST:
            return ast.values.map((x) => parseLiteral(typeName, x, variables));
        case Kind.OBJECT:
            return parseObject(typeName, ast, variables);
        case Kind.VARIABLE:
            return variables ? variables[ast.name.value] as any : null;
        default:
            console.error(ast);
            throw new TypeError(`Unable to parse/convert ${typeName}.`)

    }
}

export function checkObject(value: any) {
    if (typeof value !== 'object' || value == null || Array.isArray(value)) {
        console.error(value);
        throw new TypeError(`Unable to parse/convert to object ${value}.`);
    }
    return value;
}

export const GraphQLJSONObject = new GraphQLScalarType({
    name: 'JSONObject',
    description: 'A JSON object.',
    serialize: checkObject,
    parseValue: checkObject,
    parseLiteral: (ast, variables) => {
        if (ast.kind !== Kind.OBJECT) {
            throw new TypeError('not an object')
        }
        return parseObject('JSONObject', ast, variables);
    }
})

export const GraphQLYear = new GraphQLScalarType({
    name: 'Year',
    description: 'A 4 digit year',
    serialize: (value: unknown) => {
        if (typeof value === 'string') {
            if (value.length !== 4) throw new Error('bad year length');
            return parseInt(value, 10);
        }
        return value;
    },
    parseValue: (value: unknown) => {
        if (typeof value === 'number') {
            return value;
        }
        throw new Error('nan');
    },
    parseLiteral: (ast, variables): number => {
        if (ast.kind === Kind.STRING) {
            return parseInt(ast.value, 10);
        } else if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10);
        }
        throw new Error('bad ast');
    }
})


export const USCurrency = new GraphQLScalarType({
    name: 'USCurrency',
    description: 'A string representing a $00.00',
    serialize: (value: unknown) => {
        if (typeof value === 'number') {
            return '$'.concat((value / 100).toFixed(2))
        }
        throw new TypeError('not a number');
    },
    parseValue: (value: unknown) => {
        if (typeof value === 'string') {
            const cents = parseFloat(value.replace('$', '')) * 100;
            return cents;
        }
        throw new TypeError('not a string');
    },
    parseLiteral: (ast, variables) => {
        if (ast.kind === Kind.STRING) {
            const cents = parseFloat(ast.value.replace('$', '')) * 100;
            return cents;
        }
        throw new TypeError('not a string');
    }
})


export const Percentage = new GraphQLScalarType({
    name: 'Percentage',
    description: 'A string representing a 0.0%',
    serialize: (value: unknown) => {
        if (typeof value === 'number') {
            return truncateToString(1, true)(value * 100).concat('%');
        }
        throw new TypeError('not a number');
    },
    parseValue: (value: unknown) => {
        if (typeof value === 'string') {
            const cents = parseFloat(value.replace('%', '')) / 100;
            return cents;
        }
        throw new TypeError('not a string');
    },
    parseLiteral: (ast, variables) => {
        if (ast.kind === Kind.STRING) {
            const cents = parseFloat(ast.value.replace('%', '')) / 100;
            return cents;
        }
        throw new TypeError('not a string');
    }
});