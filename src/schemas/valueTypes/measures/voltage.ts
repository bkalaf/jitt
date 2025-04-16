import { VoltageUnitOfMeasure } from '../enums/voltageUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(VoltageUnitOfMeasure, 'V'),
    toDatabase: measurement.toDatabase(VoltageUnitOfMeasure, 'V')
}