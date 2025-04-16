import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toDatabase: measurement.toDatabase(WeightUOM, 'g'),
    toMemory: measurement.toMemory(WeightUOM, 'g')
};
