import { PowerConsumptionUnitOfMeasure } from '../enums/powerConsumptionUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(PowerConsumptionUnitOfMeasure, 'wh'),
    toDatabase: measurement.toDatabase(PowerConsumptionUnitOfMeasure, 'wh')
}