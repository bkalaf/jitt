const tracking = 'tracking-tighter tracking-tight tracking-normal tracking-wide tracking-wider';
const leading = 'leading-tight leading-snug leading-normal leading-relaxed leading-loose';
const fontSize = 'text-xs text-sm text-base text-lg text-xl';
const paddingX = 'px-0.5 px-1.5 px-2.5 px-3 px-4';
const paddingY = 'py-0.5 py-1 py-1.5 py-2 py-2.5';
const shadow = 'shadow shadow-md shadow-lg shadow-xl shadow-2xl';

function ctor(index: number) {
    const a = tracking.split(' ');
    const b = leading.split(' ');
    const c = fontSize.split(' ');
    const d = paddingX.split(' ');
    const e = paddingY.split(' ');
    const f = shadow.split(' ');
    return [a, b, c, d, e, f]
        .map((arr) => arr[index])
        .join(' ')
        .concat(' border border-black/60 shadow-black');
}
// const controlSizeClasses = {
//     tiny: ctor(0),
//     small: ctor(1),
//     medium: ctor(2),
//     large: ctor(3),
//     huge: ctor(4)
// };
export const controlSizeClasses = {
    tiny: 'tracking-tighter leading-tight text-xs px-0.5 py-0.5 shadow border border-black/60 shadow-black',
    small: 'tracking-tight leading-snug text-sm px-1.5 py-1 shadow-md border border-black/60 shadow-black',
    medium: 'tracking-normal leading-normal text-base px-2.5 py-1.5 shadow-lg border border-black/60 shadow-black',
    large: 'tracking-wide leading-relaxed text-lg px-3 py-2 shadow-xl border border-black/60 shadow-black',
    huge: 'tracking-wider leading-loose text-xl px-4 py-2.5 shadow-2xl border border-black/60 shadow-black'
};
export type ControlSizeClasses = keyof typeof controlSizeClasses;


