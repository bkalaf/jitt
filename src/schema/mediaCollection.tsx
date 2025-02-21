import { ObjectId } from 'mongodb';

export type MediaTypes = 'video-game' | 'movie' | 'book' | 'album' | 'unknown';
export type IMediaCollection = {
    _id: ObjectId;
    owner: string;
    name: string;
    regex?: string;
    mediaType: MediaTypes;
};
