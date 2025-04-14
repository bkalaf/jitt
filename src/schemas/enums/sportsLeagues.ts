import { z } from "zod";
export const sportsLeagues = {
	"MLB": "mlb",
	"NFL": "nfl",
	"NHL": "nhl",
	"NCAA": "ncaa",
	"NBA": "nba",
	"Champions League": "champions-league",
	"Premier League": "premier-league",
	"Major League Soccer": "mls",
	"Women's National Basketball Association": "wnba"
} as const;
export const sportsLeaguesToGroup = {
	"mlb": ["baseball"],
	"nfl": ["football"],
	"nhl": ["hockey"],
	"ncaa": ["football","basketball","soccer"],
	"nba": ["basketball"],
	"champions-league": ["soccer"],
	"premier-league": ["soccer"],
	"mls": ["soccer"],
	"wnba": ["basketball"]
} as const;
export const SportsLeagues = z.nativeEnum(sportsLeagues);
export type SportsLeagues = z.infer<typeof SportsLeagues>;