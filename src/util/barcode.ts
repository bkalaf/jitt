import { BarcodeTypes } from '../schemas/valueTypes/enums/barcodeTypes';

const UPC_MULTIPLIERS = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 0];
const ISBN_MULTIPLIERS = [0, 0, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0];

function calculateUpcCheckDigit(bc: string) {
    const digits = bc.padStart(13, '0').split('');
    const sum = digits
        .map((item, index) => parseInt(item, 10) * UPC_MULTIPLIERS[index])
        .reduce((pv, cv) => pv + cv, 0);
    let cd = 10 - (sum % 10);
    return (cd === 10 ? 0 : cd).toFixed(0);
}
function calculateIsbnCheckDigit(bc: string) {
    const digits = bc.padStart(13, '0').split('').slice(0, 12).concat('0');
    const sum = digits
        .map((item, index) => parseInt(item, 10) * ISBN_MULTIPLIERS[index])
        .reduce((pv, cv) => pv + cv, 0);
    let cd = 11 - (sum % 11);
    return cd === 11 ? '0' : cd === 10 ? 'X' : cd.toFixed(0);
}
function unpad(str: string, toFind: string = '') {
    if (toFind === '' || !str.startsWith(toFind)) {
        return str;
    }
    return unpad(str.slice(1), toFind);
}
export function checkCheckDigit(bc: string): [boolean, BarcodeTypes] {
    const checkdigit = bc[bc.length - 1];
    const upcCD = calculateUpcCheckDigit(bc);
    if (upcCD === checkdigit) {
        const type =
            unpadZero(bc).length === 13
                ? ['978', '979'].some((x) => bc.startsWith(x))
                    ? 'isbn-13'
                    : 'ean'
                : unpadZero(bc).length === 12
                ? unpadZero(bc).startsWith('40')
                    ? 'sku'
                    : unpadZero(bc).startsWith('49')
                    ? 'locator'
                    : 'ean'
                : 'ean';
        return [true, type];
    }
    const isbnCD = calculateIsbnCheckDigit(bc);
    if (isbnCD === checkdigit) {
        return [true, 'isbn-10'];
    }
    return [false, 'unknown'];
}
export function getCheckdigitFor(bc: string) {
    const bcc = bc.concat('0');
    const [, type] = checkCheckDigit(bcc);
    if (type === 'isbn-10') {
        return calculateIsbnCheckDigit(bcc);
    }
    return calculateUpcCheckDigit(bcc);
}
const unpadZero = (str: string) => unpad(str, '0');

function convertIsbn10To13(bc: string) {
    const baseBC = unpadZero(bc);
    const sansCD = baseBC.slice(0, baseBC.length - 1);
    const cd = calculateUpcCheckDigit(
        '978'.concat(sansCD.padStart(9, '0')).concat('0')
    );
    return '978'.concat(sansCD.padStart(9, '0')).concat(cd);
}
function convertIsbn13To10(bc: string) {
    if (!bc.startsWith('978')) return [];
    const baseBC = bc.slice(3, 12);
    const cd = calculateIsbnCheckDigit(baseBC.concat('0'));
    return [baseBC.concat(cd).padStart(13, '0')];
}

export function classifyBarcode(bc: string): {
    value: string;
    barcodeType: BarcodeTypes;
    isValid: boolean;
}[] {
    function getISBN13() {
        let [isValid2, type2] = checkCheckDigit(convertIsbn10To13(bc));
        return {
            isValid: isValid2,
            barcodeType: type2,
            value: convertIsbn10To13(bc).padStart(13, '0')
        };
    }
    function getISBN10() {
        const bc2 = convertIsbn13To10(bc);
        if (bc2.length === 0) return [];
        let [isValid2, type2] = checkCheckDigit(bc2[0]);
        return [
            {
                isValid: isValid2,
                barcodeType: type2,
                value: bc2[0]
            }
        ];
    }
    let [isValid, type] = checkCheckDigit(bc);
    return type === 'isbn-10'
        ? [
              {
                  value: bc.padStart(13, '0'),
                  isValid,
                  barcodeType: type
              },
              getISBN13()
          ]
        : type === 'isbn-13'
        ? [
              {
                  value: bc.padStart(13, '0'),
                  isValid,
                  barcodeType: type
              },
              ...getISBN10()
          ]
        : [
              {
                  value: bc.padStart(13, '0'),
                  isValid,
                  barcodeType: type
              }
          ];
}

// console.log(getCheckdigitFor('01111008660'));
// console.log(classifyBarcode('011110086600'))
// console.log(classifyBarcode('9781476796055'))
