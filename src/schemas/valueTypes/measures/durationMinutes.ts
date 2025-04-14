import { DurationUnitOfMeasure } from '../../enums/durationUnitOfMeasure';
import measurement from '../../entities/measurement';;

export default {
    toMemory: measurement.toMemory(DurationUnitOfMeasure, 'm'),
    toDatabase: measurement.toDatabase(DurationUnitOfMeasure, 'm')
};
