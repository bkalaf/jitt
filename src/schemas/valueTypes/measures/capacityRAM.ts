import { CapacityUnitOfMeasure } from '../../enums/capacityUnitOfMeasure';
import { WeightUOM } from '../../enums/weightUOM';
import measurement from '../../entities/measurement';;

export default {
    toMemory: measurement.toMemory(CapacityUnitOfMeasure, 'mb'),
    toDatabase: measurement.toDatabase(CapacityUnitOfMeasure, 'mb')
}