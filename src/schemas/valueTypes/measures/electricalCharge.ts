import { ElectricalChargeUnitOfMeasure } from '../enums/electricalChargeUnitOfMeasure';
import { WeightUOM } from '../enums/weightUOM';
import measurement from '../measurement';;

export default {
    toMemory: measurement.toMemory(ElectricalChargeUnitOfMeasure, 'mAh'),
    toDatabase: measurement.toDatabase(ElectricalChargeUnitOfMeasure, 'mAh')
}