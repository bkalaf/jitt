import { z } from "zod";
export const primitives = {
	"string": "string",
	"int": "int",
	"double": "double",
	"bool": "bool",
	"objectId": "objectId",
	"uuid": "uuid",
	"date": "date",
	"data": "data"
} as const;
export const Primitives = z.nativeEnum(primitives);
export type Primitives = z.infer<typeof Primitives>;