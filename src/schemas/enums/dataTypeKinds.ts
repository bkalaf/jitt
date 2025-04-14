import { z } from "zod";
export const dataTypeKinds = {
	"Set": "set",
	"List": "list",
	"Dictionary": "dictionary",
	"Primitive": "primitive",
	"Enum": "enum",
	"Reference": "reference",
	"Embedded": "embedded",
	"Dimension": "dimension"
} as const;
export const DataTypeKinds = z.nativeEnum(dataTypeKinds);
export type DataTypeKinds = z.infer<typeof DataTypeKinds>;