export const baseInteraction = 'transition-all duration-1000 delay-150 ease-in';

const whenHovered = {
    lime: 'enabled:hover:bg-yellow-400 enabled:hover:text-black enabled:hover:scale-105'
};
const whenFocused = {
    halo: 'enabled:focus:ring enabled:focus:ring-white/80 enabled:focus:ring-offset-2'
};
const whenDisabled = {
    blur: 'cursor-pointer disabled:bg-neutral-700 disabled:text-gray-300 disabled:cursor-not-allowed'
};

export const interactionClasses = {
    hover: whenHovered.lime,
    disable: whenDisabled.blur,
    focus: whenFocused.halo,
    active: 'active:inset-ring-2 active:inset-ring-fuschia-500',
    pressed: 'aria-pressed:shadow-md aria-pressed:shadow-black'
}