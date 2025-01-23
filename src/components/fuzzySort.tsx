import { compareItems, RankingInfo } from '@tanstack/match-sorter-utils';
import { SortingFn, RowData, sortingFns } from '@tanstack/react-table';


export const fuzzySort: SortingFn<RowData> = (rowA, rowB, columnId) => {
    let dir = 0;

    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(rowA.columnFiltersMeta[columnId]! as any as RankingInfo, rowB.columnFiltersMeta[columnId]! as any as RankingInfo);
    }

    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
