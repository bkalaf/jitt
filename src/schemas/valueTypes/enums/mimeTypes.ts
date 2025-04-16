import { z } from 'zod';

export const mimeTypes = {
    'image/jpg': 'JPG',
    'image/png': 'PNG',
    'image/gif': 'GIF',
    'application/json': 'JSON',
    'text/csv': 'CSV',
    'application/vnd.ms-excel': 'XLS',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
    'application/octet-stream': ''
} as const;

export const MimeTypes = z.nativeEnum(mimeTypes);
export type MimeTypes = z.infer<typeof MimeTypes>;