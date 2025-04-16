import { z } from 'zod';
import {
    MeasurementMemory,
    $lengthToNarrative,
    $weightToNarrative,
    $durationToNarrative,
    $angleToNarrative,
    $capacityToNarrative,
    $energyConsumptionToNarrative,
    $rotationalSpeedToNarrative,
    $volumeToNarrative,
    $amperageToNarrative,
    $voltageToNarrative,
    $wattageToNarrative
} from '../../valueTypes/measurement';

function createMeasurementNarrative<T extends string>(
    label: string,
    abbr: string,
    func: (param?: z.infer<MeasurementMemory<T, Record<string, T>>>) => string[]
) {
    return (measurement?: z.infer<MeasurementMemory<T, Record<string, T>>>) => {
        const result = func(measurement);
        return {
            label,
            abbr: result.length === 0 ? undefined : abbr,
            value: result[0],
            narrative:
                result.length === 0 ? [] : [[label, result[0]].join(': ')]
        };
    };
}

const lengthToNarrative = (label: string, abbr = '') =>
    createMeasurementNarrative(label, abbr, $lengthToNarrative);
const weightToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $weightToNarrative);
const durationToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $durationToNarrative);
const voltageToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $voltageToNarrative);
const wattageToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $wattageToNarrative);
const amperageToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $amperageToNarrative);
const capacityToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $capacityToNarrative);
const volumeToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $volumeToNarrative);
const rotationalSpeedToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $rotationalSpeedToNarrative);
const angleToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $angleToNarrative);
const energyConsumptionToNarrative = (label: string) =>
    createMeasurementNarrative(label, '', $energyConsumptionToNarrative);

export default {
    duration: durationToNarrative,
    length: lengthToNarrative,
    weight: weightToNarrative,
    angle: angleToNarrative,
    energyConsumption: energyConsumptionToNarrative,
    volume: volumeToNarrative,
    rotationalSpeed: rotationalSpeedToNarrative,
    capacity: capacityToNarrative,
    voltage: voltageToNarrative,
    amperage: amperageToNarrative,
    wattage: wattageToNarrative
};

// console.log(
//     lengthToNarrative('Width', 'W')({ magnitude: { kind: 'int', v: 20 }, unit: 'in' })
// );
// console.log(
//     weightToNarrative('Weight')({ magnitude: { kind: 'int', v: 800 }, unit: 'g' })
// );
// console.log(
//     weightToNarrative('Weight')({ magnitude: { kind: 'int', v: 100 }, unit: 'g' })
// );
// console.log(
//     weightToNarrative('Weight')({ magnitude: { kind: 'int', v: 1750 }, unit: 'g' })
// );
// console.log(
//     weightToNarrative('Weight')({
//         magnitude: { kind: 'int', v: 453.6 },
//         unit: 'g'
//     })
// );
// console.log(
//     weightToNarrative('Weight')({
//         magnitude: { kind: 'int', v: 449.6 },
//         unit: 'g'
//     })
// );
// console.log(
//     durationToNarrative('Runtime')({ magnitude: { kind: 'int', v: 84 }, unit: 's' })
// );
// console.log(
//     durationToNarrative('Length')({ magnitude: { kind: 'int', v: 31 }, unit: 'm' })
// );
// console.log(
//     durationToNarrative('Runtime')({ magnitude: { kind: 'int', v: 423 }, unit: 'm' })
// );
// console.log(
//     volumeToNarrative('Volume')({ magnitude: { kind: 'float', v: 29.6 }, unit: 'flOz' })
// );
// console.log(
//     capacityToNarrative('Capacity')({ magnitude: { kind: 'float', v: 100 }, unit: 'gb' })
// );
// console.log(
//     rotationalSpeedToNarrative('Disc Write')({
//         magnitude: { kind: 'float', v: 100 },
//         unit: 'rpm'
        
//     })
// );
// console.log(
//     energyConsumptionToNarrative('Battery Consumption')({
//         magnitude: { kind: 'float', v: 29.6 },
//         unit: 'Wh'
//     })
// );
