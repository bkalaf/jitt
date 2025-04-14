import { z } from "zod";
export const hugoAwardCategories = {
	"Best Novel": "novel",
	"Best Novella": "novella",
	"Best Novelette": "novelette",
	"Best Short Story": "short-story",
	"Best Series": "series",
	"Best Graphic Story": "graphic-story",
	"Best Fan Writer": "fan-writer",
	"Best Game or Interactive Work": "game",
	"Best Related Work": "related-work"
} as const;
export const hugoAwardCategoriesToGroup = {
	"novel": ["hugo"],
	"novella": ["hugo"],
	"novelette": ["hugo"],
	"short-story": ["hugo"],
	"series": ["hugo"],
	"graphic-story": ["hugo"],
	"fan-writer": ["hugo"],
	"game": ["hugo"],
	"related-work": ["hugo"]
} as const;
export const HugoAwardCategories = z.nativeEnum(hugoAwardCategories);
export type HugoAwardCategories = z.infer<typeof HugoAwardCategories>;