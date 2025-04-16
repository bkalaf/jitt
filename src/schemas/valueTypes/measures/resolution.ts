import { ScreenResolutionUnitOfMeasure } from '../enums/screenResolutionUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(ScreenResolutionUnitOfMeasure, 'mp'),
    toDatabase: measurement.toDatabase(ScreenResolutionUnitOfMeasure, 'mp')
};