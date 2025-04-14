import { AmperageUnitOfMeasure } from '../../enums/amperageUnitOfMeasure';
import { WeightUOM } from '../../enums/weightUOM';
import measurement from '../../entities/measurement';;

export default {
    toMemory: measurement.toMemory(AmperageUnitOfMeasure, 'A'),
    toDatabase: measurement.toDatabase(AmperageUnitOfMeasure, 'A')
}