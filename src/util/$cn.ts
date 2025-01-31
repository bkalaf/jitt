import { colorClasses } from './colorClasses';
import { controlSizeClasses } from './controlSizeClasses';
import { baseInteraction, interactionClasses } from './interactionClasses';
import { partitionBy } from './partitionBy';

export function splitClassLine(str: string) {
    return str?.split(' ') ?? [];
}
export function collectClassLine(str: string[]) {
    return str.map(splitClassLine).reduce((pv, cv) => [...pv, ...cv], []);
}
export function lookupFrom<T extends string>(obj: Record<T, string>) {
    return (key?: T) => (key == null ? [] : splitClassLine(obj[key]));
}
export function combineConditional<T extends any[] = never[]>(c1: IConditional<T>, c2: IConditional<T>) {
    return (...args: T) => {
        const cond1 = typeof c1 === 'boolean' ? c1 : c1(...args);
        const cond2 = typeof c2 === 'boolean' ? c2 : c2(...args);
        return cond1 && cond2;
    }
}
export function combineFlags(f1: IFlags, f2: IFlags) {
    return (animationState: AnimationState) => {
        const flag1 = typeof f1 === 'function' ? f1(animationState) : f1;
        const flag2 = typeof f2 === 'function' ? f2(animationState) : f2;
        return { ...flag1, ...flag2 }
    }
}
export function cn<T extends IProps>(props: T, flags1: IFlags = {}, ...classes: string[]) {
    return function (inputStates: { animationState?: AnimationState, disabled?: boolean }) {
        const { animationState, disabled} = { disabled: false, animationState: 'hidden' as const, ...inputStates };
        const { animate, className, color, controlSize, interactions, flags: flags2, ...remain } = props;
        const transitions = interactions != null && interactions.length > 0;
        const $masterFlags = {
            [baseInteraction]: transitions,
            animate__animated: animate ?? false,
            ...combineFlags(flags1, flags2 ?? {})(animationState)
        };
        const [trues, falses] = partitionBy<[string, boolean], string>(
            (x) => x[1],
            (x) => x[0]
        )(Object.entries($masterFlags));
        
        const cl = [
            ...lookupFrom(colorClasses)(color),
            ...lookupFrom(controlSizeClasses)(controlSize),
            ...collectClassLine(interactions?.split(',').map((key) => interactionClasses[key as SingleInteract]) ?? []),
            ...splitClassLine(className ?? ''),
            ...collectClassLine(classes),
            ...collectClassLine(trues)
        ];
        const final = new Set<string>(cl);
        for (const item of collectClassLine(falses)) {
            final.delete(item);
        }
        return { className: final.size === 0 ? undefined : Array.from(final.values()).join(' '), ...remain };
    };
}
