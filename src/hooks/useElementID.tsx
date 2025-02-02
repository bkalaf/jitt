import { useMemo } from 'react';
import { generateRandomStringCrypto } from '../schema/Controls/generateRandomStringCrypto';


export function useElementID() {
    return useMemo(() => generateRandomStringCrypto(24), []);
}
