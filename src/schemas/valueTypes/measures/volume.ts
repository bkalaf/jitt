import { VolumeUnitOfMeasure } from '../enums/volumeUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(VolumeUnitOfMeasure, 'mL'),
    toDatabase: measurement.toDatabase(VolumeUnitOfMeasure, 'mL')
};