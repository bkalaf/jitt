import { ColumnFiltersState, ColumnOrderState, ColumnPinningState, ColumnSizingState, ExpandedState, GroupingState, RowSelectionState, SortingState, VisibilityState } from '@tanstack/react-table';
import { IReactTableState } from './usePersistedSettings';

export function createInitialState(): IReactTableState {
    return {
        columnFilters: [] as ColumnFiltersState,
        columnOrder: [] as ColumnOrderState,
        columnPinning: {
            left: [],
            right: []
        } as ColumnPinningState,
        columnSizing: {} as ColumnSizingState,
        columnVisibility: {} as VisibilityState,
        expanded: {} as ExpandedState,
        globalFilter: undefined,
        grouping: [] as GroupingState,
        pagination: {
            pageIndex: 0,
            pageSize: 25
        },
        rowSelection: {} as RowSelectionState,
        sorting: [] as SortingState,
        creatingRow: false,
        editingRow: undefined
    };
}
