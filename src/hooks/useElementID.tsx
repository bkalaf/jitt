import { useMemo } from 'react';
import { generateRandomStringCrypto } from '../components/Controls/generateRandomStringCrypto';


export function useElementID() {
    return useMemo(() => generateRandomStringCrypto(24), []);
}
