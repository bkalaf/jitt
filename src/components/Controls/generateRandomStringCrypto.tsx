import crypto from 'crypto';


export function generateRandomStringCrypto(length: number): string {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789-";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomValues = new Uint32Array(1);
        crypto.getRandomValues(randomValues);
        const randomIndex = randomValues[0] % characters.length;
        result += characters.charAt(randomIndex);
    }
    return result;
}
