import { z } from "zod";
export const strapTypes = {
	"adjustable-strap": "adjustable-strap",
	"ankle-strap": "ankle-strap",
	"double-strap": "double-strap",
	"padded-strap": "padded-strap",
	"single-strap": "single-strap",
	"slingback-strap": "slingback-strap",
	"strapless": "strapless",
	"t-strap": "t-strap",
	"toe-strap": "toe-strap",
	"x-strap": "x-strap"
} as const;
export const StrapTypes = z.nativeEnum(strapTypes);
export type StrapTypes = z.infer<typeof StrapTypes>;