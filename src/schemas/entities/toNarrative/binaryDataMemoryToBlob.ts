import z from 'zod';
import { enumLookup } from '../../valueTypes/enums/inverseEnum';
import { MimeTypes } from '../../valueTypes/enums/mimeTypes';

export function binaryDataMemoryToBlob(
    data: z.infer<
        z.ZodType<{
            data: ArrayBuffer;
            mimeType: MimeTypes;
        }>
    >
) {
    const { data: buffer, mimeType } = data;
    return data.data
        ? new Blob([buffer], {
              type:
                  mimeType === '' ? undefined : enumLookup(MimeTypes)(mimeType)
          })
        : undefined;
}
