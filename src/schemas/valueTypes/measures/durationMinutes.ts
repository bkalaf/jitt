import { DurationUnitOfMeasure } from '../enums/durationUnitOfMeasure';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(DurationUnitOfMeasure, 'm'),
    toDatabase: measurement.toDatabase(DurationUnitOfMeasure, 'm')
};
