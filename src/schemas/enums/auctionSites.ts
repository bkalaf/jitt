import { z } from "zod";
export const auctionSites = {
	"www.storagetreasures.com": "storage-treasures",
	"www.lockerfox.com": "lockerfox"
} as const;
export const AuctionSites = z.nativeEnum(auctionSites);
export type AuctionSites = z.infer<typeof AuctionSites>;