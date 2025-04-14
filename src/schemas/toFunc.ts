import { z } from 'zod';

export const toFunc = <T extends z.ZodType = z.ZodType, TReturn extends z.ZodType = z.ZodType>(func?: (zString: T) => TReturn): (input: T) => TReturn => func ?? ((zString) => zString as unknown as TReturn);
