import express, { Request, Response } from 'express';
import { Controller } from '../controllers/Controller';
import { MongoService } from '../services/mongoService';
import { z } from 'zod';
import $objectId from './../schemas/objectId';
import $string from './../schemas/string';
import $date from '../schemas/date';
import { $dbOpt, $memOpt } from '../schemas/asOptional';
import is from '../schemas/checkType';
import { $dbReq, $memReq } from '../schemas/asRequired';
const router = express.Router();
import entityTypes from './../schemas/entities/brand';

const { toMemory, toDatabase } = entityTypes;
const collectionController = new Controller(
    new MongoService('brand', toMemory, toDatabase, [
        {
            $lookup: {
                from: 'mercariBrand',
                localField: 'mercariBrand',
                foreignField: '_id',
                as: 'mercariBrand'
            }
        },
        {
            $unwind: {
                path: '$mercariBrand',
                preserveNullAndEmptyArrays: true
            }
        }
    ])
);

router.get('/', collectionController.getAllRecords.bind(collectionController));
router.get('/:id', collectionController.getById.bind(collectionController));
router.post('/', collectionController.createRecord.bind(collectionController));
router.put(
    '/:id',
    collectionController.updateRecord.bind(collectionController)
);
router.delete(
    '/:id',
    collectionController.deleteRecord.bind(collectionController)
);

export default router;
