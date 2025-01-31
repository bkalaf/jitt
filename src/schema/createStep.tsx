
export function createStep(power: 0 | 1 | 2 | 3 | 4 | 5 | 6) {
    switch (power) {
        case 0:
            return 1;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return (1 / (10 ^ power));
    }
}
