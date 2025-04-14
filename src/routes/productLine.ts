import express from 'express';
import { Controller } from '../controllers/Controller';
import { MongoService } from '../services/mongoService';
import entityTypes from './../schemas/entities/productLine';

const router = express.Router();
const { toMemory, toDatabase } = entityTypes;

const collectionController = new Controller(
    new MongoService('productLine', toMemory, toDatabase, [
        {
            $lookup: {
                from: 'brandView',
                localField: 'brand',
                foreignField: '_id',
                as: 'brand'
            }
        },
        {
            $unwind: {
                path: '$brand',
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
