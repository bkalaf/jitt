import { z } from "zod";
export const riseTypes = {
	"High Rise": "high-rise",
	"Mid Rise": "mid-rise",
	"Low Rise": "low-rise"
} as const;
export const riseTypesToRegex = {
    'high-rise': 'hi(gh)?rise',
    'mid-rise': 'midrise',
    'low-rise': 'low?rise'
} as const;
export const RiseTypes = z.nativeEnum(riseTypes);
export type RiseTypes = z.infer<typeof RiseTypes>;