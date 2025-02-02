import { makeStateUpdater, Row, RowData, Table, TableFeature, Updater } from '@tanstack/react-table';

export const CRUDFeature: TableFeature<any> = {
    getInitialState: (state): ICrudActionsTableState => {
        return {
            creatingRow: false,
            editingRow: undefined,
            ...state
        };
    },
    getDefaultOptions: function <TData extends RowData>(table: Table<TData>): ICrudActionsOptions {
        return {
            enableCreating: true,
            enableEditing: true,
            onCreatingRowChange: makeStateUpdater('creatingRow', table),
            onEditingRowChange: makeStateUpdater('editingRow', table)
        };
    },
    createTable: function <TData extends RowData>(table: Table<TData>): void {
        table.getIsCreating = () => {
            const { creatingRow } = table.getState();
            return creatingRow === true;
        }
        table.getIsEditing = () => {
            const { editingRow } = table.getState();
            return editingRow != null;
        }
        table.setEditingRow = (updater) => {
            table.options.onEditingRowChange?.((old) => {
                const next: string | undefined = updater instanceof Function ? updater(old) : updater;
                return next;
            });
        };
        table.setCreatingRow = (updater) => {
            table.options.onCreatingRowChange?.((old) => {
                const next: boolean = updater instanceof Function ? updater(old) : updater;
                return next;
            });
        };
        table.closeCreateRow = () => {
            table.options.onCreatingRowChange?.(() => false);
        };
        table.closeEditRow = () => {
            table.options.onEditingRowChange?.(() => undefined);
        };
    },
    createRow: function <TData extends RowData>(row: Row<TData>, table: Table<TData>): void {
        row.getIsRowEditing = () => {
            const { editingRow } = table.getState();
            return editingRow != null ? editingRow === row.id : false;
        };
    }
};
