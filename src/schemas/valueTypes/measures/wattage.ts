import { WattageUnitOfMeasure } from '../enums/wattageUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(WattageUnitOfMeasure, 'W'),
    toDatabase: measurement.toDatabase(WattageUnitOfMeasure, 'W')
}