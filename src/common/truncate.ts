import { removeEndChar } from '../schemas/entities/removeEndChar.js';

export function truncateToString(digits: number = 0, removeEndZero = false) {
    return (n: number) => {
        const [i, d] = n.toString().includes('.')
            ? n.toString().split('.')
            : [n.toString(), '0'.repeat(digits).prefaceNonEmpty('.')]
                  .join('')
                  .split('.');
        const result = [i, d?.slice(0, digits)]
            .filter((x) => x != null)
            .join('.');
        if (removeEndZero && result.includes('.') && result.endsWith('0')) {
            return removeEndChar('.')(removeEndChar('0')(result));
        } else if (result.endsWith('.')) {
            return removeEndChar('.')(result);
        }
        return result;
    };
}
export function truncateToNumber(digits: number = 0, removeEndZero = false) {
    return (n: number) => {
        const [i, d] = n.toString().includes('.')
            ? n.toString().split('.')
            : [n.toString(), '0'.repeat(digits).prefaceNonEmpty('.')]
                  .join('')
                  .split('.');
        const result = [i, d?.slice(0, digits)]
            .filter((x) => x != null)
            .join('.');
        if (removeEndZero && result.includes('.') && result.endsWith('0')) {
            return parseFloat(removeEndChar('.')(removeEndChar('0')(result)));
        } else if (result.endsWith('.')) {
            return parseFloat(removeEndChar('.')(result));
        }
        return parseFloat(result);
    };
}
export const truncate = truncateToNumber;
