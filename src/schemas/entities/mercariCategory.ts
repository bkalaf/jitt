import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';

const toMemory = z.object({
    selector: z.string().regex(/^#.+/, 'Value must be a selector.').default('# '),
    name: z.string().nonempty().default('')
})

const toDatabase = z.object({
    selector: z.string().regex(/^#.+/, 'Value must be a selector.'),
    name: z.string().nonempty()
});

export default {
    toMemory,
    toDatabase
}