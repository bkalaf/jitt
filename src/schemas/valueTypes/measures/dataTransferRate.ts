import { DataTransferRateUnitOfMeasure } from '../../enums/dataTransferRateUnitOfMeasure';
import { WeightUOM } from '../../enums/weightUOM';
import measurement from '../../entities/measurement';;

export default {
    toMemory: measurement.toMemory(DataTransferRateUnitOfMeasure, 'mbit/s'),
    toDatabase: measurement.toDatabase(DataTransferRateUnitOfMeasure, 'mb/s')
};