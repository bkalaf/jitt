import { removeEndChar } from './removeEndChar';

export function truncate(digits: number = 0, removeEndZero = false) {
    return (n: number) => {
        const [i, d] = n.toString().includes('.')
            ? n.toString().split('.')
            : n.toString().concat('.').padEnd(digits, '0');
        const result = [i, d.slice(0, digits)].join('.');
        if ((removeEndZero && result.endsWith('0')) || result.endsWith('.')) {
            return parseFloat(removeEndChar('0', '.')(result));
        }
        return parseFloat([i, d.slice(0, digits)].join('.'));
    };
}
