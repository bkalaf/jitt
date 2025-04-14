import { z } from "zod";
export const colleges = {
	"University of Alabama Crimson Tide": "university-of-alabama",
	"University of Arizona Wildcats": "university-of-arizona",
	"Auburn University Tigers": "auburn-university",
	"San Diego State University Aztecs": "san-diego-state",
	"Ohio State University Buckeyes": "ohio-state-university",
	"Harvard University Crimson": "harvard-university",
	"University of California, Santa Cruz Banana Slugs": "university-of-california-santa-cruz",
	"University of Florida Gators": "university-of-florida",
	"Indiana University Hoosiers": "indiana-university",
	"University of Virginia Cavaliers": "university-of-virginia",
	"Syracuse University Orange": "syracuse-university",
	"University of Miami Hurricanes": "university-of-miami"
} as const;
export const Colleges = z.nativeEnum(colleges);
export type Colleges = z.infer<typeof Colleges>;