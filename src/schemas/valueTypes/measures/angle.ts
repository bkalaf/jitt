import { DegreesUnitOfMeasure } from '../enums/degreesUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(DegreesUnitOfMeasure, '°'),
    toDatabase: measurement.toDatabase(DegreesUnitOfMeasure, '°')
};