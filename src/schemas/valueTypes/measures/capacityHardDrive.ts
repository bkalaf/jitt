import { CapacityUnitOfMeasure } from '../enums/capacityUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(CapacityUnitOfMeasure, 'gb'),
    toDatabase: measurement.toDatabase(CapacityUnitOfMeasure, 'gb')
}