import { LengthUOM } from '../../enums/lengthUOM';
import measurement from '../../entities/measurement';

export default {
    toMemory: measurement.toMemory(LengthUOM, 'mm'),
    toDatabase: measurement.toDatabase(LengthUOM, 'mm')
}