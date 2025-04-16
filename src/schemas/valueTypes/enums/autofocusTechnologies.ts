import { z } from "zod";
export const autofocusTechnologies = {
	"Selective single-point": "selective-single",
	"Multi-area": "multi",
	"Single": "single",
	"Live View": "live-view",
	"Contrast Detection": "contrast-detection",
	"Hybrid": "hybrid",
	"Phase Detection": "phase-detection"
} as const;
export const AutofocusTechnologies = z.nativeEnum(autofocusTechnologies);
export type AutofocusTechnologies = z.infer<typeof AutofocusTechnologies>;