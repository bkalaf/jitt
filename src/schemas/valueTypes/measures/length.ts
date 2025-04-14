import { LengthUOM } from '../../enums/lengthUOM';
import measurement from '../../entities/measurement';;

export default {
    toMemory: measurement.toMemory(LengthUOM, 'in'),
    toDatabase: measurement.toDatabase(LengthUOM, 'in')
}