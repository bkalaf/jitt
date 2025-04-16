import { RotationalSpeedUnitOfMeasure } from '../enums/rotationalSpeedUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(RotationalSpeedUnitOfMeasure, 'rpm'),
    toDatabase: measurement.toDatabase(RotationalSpeedUnitOfMeasure, 'rpm')
}