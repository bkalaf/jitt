import $objectId from '../objectId';
import $string from '../string';
import $date from '../date';
import $int from '../int';
import $enum from '../enum';
import $fk from '../foreignKey';
import $is from '../checkType';
import { $dbOpt, $memOpt } from '../asOptional';
import { $dbReq, $memReq } from '../asRequired';
import { z } from 'zod';
import brand from './brand';
import productLine from './productLine';
import unionCase from './unionCase';

const toMemory = z.discriminatedUnion('kind', [
    unionCase.toMemory(z.literal('brand'), brand.toMemory),
    unionCase.toMemory(z.literal('productLine'), productLine.toMemory)
]).optional()

const toDatabase = z.discriminatedUnion('kind', [
    unionCase.toMemory(z.literal('brand'), brand.toMemory),
    unionCase.toMemory(z.literal('productLine'), productLine.toMemory)
]).optional()

export default {
    toMemory,
    toDatabase
};

export type Memory = z.infer<typeof toMemory>;
export type Database = z.infer<typeof toDatabase>;
