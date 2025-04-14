import { ObjectId } from 'mongodb';
import { z } from 'zod';

const memory = z
    .union([
        z.string().default(() => new ObjectId().toHexString()),
        z.instanceof(ObjectId).default(() => new ObjectId())
    ])
    .transform((val) => (typeof val === 'string' ? val : val.toHexString()));

const database = z
    .preprocess((val, ctx) => {
        console.log(`preprocess:`);
        console.log(val);
        try {
            if (val instanceof ObjectId) return val;
            if (typeof val === 'string') {
                if (ObjectId.isValid(val)) {
                    return new ObjectId(val);
                }
                console.log(`isValid === false`);
                return;
            }
        } catch (error) {
            return;
        }
    }, z.instanceof(ObjectId))
    .default(() => new ObjectId()) as z.ZodType<ObjectId, z.ZodTypeDef, ObjectId>;

export default {
    memory,
    database
};

console.log(z.instanceof(ObjectId).parse(new ObjectId()))
console.log(database.parse(new ObjectId()));
