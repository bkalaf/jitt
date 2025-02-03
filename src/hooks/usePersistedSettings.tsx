import { useParams } from '@tanstack/react-router';
import { TableState, Updater } from '@tanstack/react-table';
import { useState, useEffect, useMemo, useCallback } from 'react';
import yaml from 'js-yaml';
import fs from 'graceful-fs';
import { createInitialState } from './createInitialState';

export type IReactTableState = {
    columnFilters: TableState['columnFilters'];
    columnOrder: TableState['columnOrder'];
    columnPinning: TableState['columnPinning'];
    columnSizing: TableState['columnSizing'];
    columnVisibility: TableState['columnVisibility'];
    expanded: TableState['expanded'];
    globalFilter: TableState['globalFilter'];
    grouping: TableState['grouping'];
    pagination: TableState['pagination'];
    rowSelection: TableState['rowSelection'];
    sorting: TableState['sorting'];
    creatingRow: TableState['creatingRow'];
    editingRow: TableState['editingRow'];
};

const collectionSettingsFilename = ['/home/bobby/.config/jitt', 'collection-settings.yaml'].join('/');

export type ICollectionSettings = Record<string, IReactTableState>;
export function usePersistedSettings() {
    const { collection } = useParams({ from: '/data/$collection/' });
    const [dictionary, setDictionary] = useState<ICollectionSettings>({});
    const state = useMemo(() => (Object.keys(dictionary).includes(collection) ? dictionary[collection] : createInitialState()), [collection, dictionary]);
    useEffect(() => {
        const func = () => {
            if (!fs.existsSync(collectionSettingsFilename)) {
                fs.writeFileSync(collectionSettingsFilename, JSON.stringify({}));
            }
            const text = fs.readFileSync(collectionSettingsFilename).toString('utf-8');
            const data = yaml.load(text, {}) as ICollectionSettings;
            setDictionary(data);
        };
        setTimeout(func, 200);
    }, []);
    const setCollectionTo = useCallback(
        (newState: Updater<IReactTableState> = createInitialState()) => {
            setDictionary((old) => {
                const next = newState instanceof Function ? newState(old[collection]) : newState;
                return { ...old, [collection]: next };
            });
        },
        [collection]
    );
    useEffect(() => {
        const func = () => {
            setDictionary(old => {
                if (!Object.keys(old).includes(collection)) {
                    const next = createInitialState();
                    console.log(`next`, next);
                    return { ...old, [collection]: next }
                }
                return old;
            })
        };
        setTimeout(func, 150);
    }, [collection]);
    useEffect(() => {
        const data = yaml.dump(dictionary, { indent: 4, skipInvalid: true });
        fs.writeFileSync(collectionSettingsFilename, data);
    }, [dictionary]);
    const setCollectionSettingValue = useCallback(<TKey extends keyof IReactTableState>(coll: string, key: TKey) => {
        return (updater: Updater<IReactTableState[TKey]>) => {
            setDictionary((old) => {
                const settings = old[coll];
                const newSettingValue = updater instanceof Function ? updater(settings[key]) : updater;
                const nextSettings = { ...settings, [key]: newSettingValue };
                return { ...old, [coll]: nextSettings };
            });
        };
    }, []);

    return {
        state,
        onColumnFiltersChange: setCollectionSettingValue(collection, 'columnFilters'),
        onColumnSizingChange: setCollectionSettingValue(collection, 'columnSizing'),
        onColumnVisibilityChange: setCollectionSettingValue(collection, 'columnVisibility'),
        onColumnOrderChange: setCollectionSettingValue(collection, 'columnOrder'),
        onColumnPinningChange: setCollectionSettingValue(collection, 'columnPinning'),
        onExpandedChange: setCollectionSettingValue(collection, 'expanded'),
        onGroupingChange: setCollectionSettingValue(collection, 'grouping'),
        onGlobalFilterChange: setCollectionSettingValue(collection, 'globalFilter'),
        onPaginationChange: setCollectionSettingValue(collection, 'pagination'),
        onSortingChange: setCollectionSettingValue(collection, 'sorting'),
        onRowSelectionChange: setCollectionSettingValue(collection, 'rowSelection'),
        onCreatingRowChange: setCollectionSettingValue(collection, 'creatingRow'),
        onEditingRowChange: setCollectionSettingValue(collection, 'editingRow')
    };
}
