import { Db } from 'mongodb';
import { SortLevel } from './queryClient';

export async function queryDefaultFunction({ queryKey, meta }: ICollectionQueryContext) {
    if (meta == null) throw new Error('no query meta');
    const { getMongo } = meta as {
        getMongo: () => Promise<Db>;
    };
    const [collection, sortLevels] = queryKey as [string, SortLevel[]?];
    const sort = sortLevels?.map((level) => typeof level === 'string' ? [level, 1]
        : level.length === 1 ? [level[0], 1]
            : [level[0], level[1] ? 1 : -1]
    ) as [string, 1 | -1][] | undefined;
    const view = [collection, 'View'].join('');
    const db = await getMongo();
    const results = await db.collection(view).find({}, { sort }).toArray();
    return results;
}
