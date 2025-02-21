import dayjs from 'dayjs';

export const TIMECODE = `T00:00:00.000-08:00`;
export const parseDate = (dateString: string) => dayjs(dateString.concat(TIMECODE)).toDate();
