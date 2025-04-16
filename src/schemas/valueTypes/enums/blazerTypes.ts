import { z } from "zod";
export const blazerTypes = {
	"double breasted": "doubleBreasted",
	"one button": "oneButton",
	"two button": "twoButton",
	"three button": "threeButton",
	"four button": "fourButton"
} as const;
export const BlazerTypes = z.nativeEnum(blazerTypes);
export type BlazerTypes = z.infer<typeof BlazerTypes>;