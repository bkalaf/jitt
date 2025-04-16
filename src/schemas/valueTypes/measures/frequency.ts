import { FrequencyUnitOfMeasure } from '../enums/frequencyUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(FrequencyUnitOfMeasure, 'mHz'),
    toDatabase: measurement.toDatabase(FrequencyUnitOfMeasure, 'mHz')
}