import { DurationUnitOfMeasure } from '../../enums/durationUnitOfMeasure';
import measurement from '../../entities/measurement';;

export default {
    toMemory: measurement.toMemory(DurationUnitOfMeasure, 's'),
    toDatabase: measurement.toDatabase(DurationUnitOfMeasure, 's')
}