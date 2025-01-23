///<reference path="./../global.d.ts" />
import { colorClasses } from './colorClasses';
import { controlSizeClasses } from './controlSizeClasses';
import { baseInteraction, interactionClasses } from './interactionClasses';
import { collectClassLine, partitionBy } from './$cn';

export function handleInteractions(interactions?: Interactions) {
    if (interactions == null) return {};
    const snip = (key: keyof typeof interactionClasses): [string, boolean] => [interactionClasses[key], interactions.includes(key)];
    const interim = [snip('disable'), snip('hover'), snip('focus'), snip('active')];

    return Object.fromEntries([...(interim.some((x) => x[1]) ? [[baseInteraction, true] as [string, boolean]] : []), ...interim]) as Record<string, boolean>;
}

export function $className<T extends IProps>(props: T, _flags: IFlagsObject = {}, ...classes: string[]) {
    const { className, controlSize, color, interactions, animate, ...remain } = props;
    const flags = {
        animate_animated: animate ?? false,
        ...handleInteractions(interactions),
        ..._flags,
        ...(color ? { [colorClasses[color]]: true } : {}),
        ...(controlSize ? { [controlSizeClasses[controlSize]]: true } : {}),
        [className ?? '']: true,
        ...Object.fromEntries(classes.map((x) => [x, true] as [string, boolean]))
    };
    // console.log(`flags`, flags);
    const [trues, falses] = partitionBy<[string, boolean], string>(x => x[1], x => x[0])(Object.entries(flags))

    const distinct = new Set<string>(collectClassLine(trues));
    for (const item of collectClassLine(falses)) {
        distinct.delete(item);
    }
    return { ...remain, className: distinct.size === 0 ? undefined : Array.from(distinct.values()).join(' ') }
}

// console.log(handleInteractions('hover'));
// console.log(handleInteractions('hover,focus,disable,active'));
// console.log(handleInteractions(undefined));

// console.log($className({ className: 'one two', type: 'button', interactions: 'hover,focus', color: 'red', animate: true }, { two: false, three: true }, 'array1', 'array2'))