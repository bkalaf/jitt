import { ColumnDef, RowData, flexRender, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useCallback, useReducer } from 'react';
import { Button } from './Button';
import { Document } from 'mongodb';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { ColumnsModal } from './ColumnsModal';
import { fuzzySort } from './fuzzySort';
import { fuzzyFilter } from './fuzzyFilter';
import { ReactTableActionButtons } from './ReactTableActionButtons';
import { useToggler } from '../hooks/useToggler';
import { Route } from '../routes/data.$collection.index';
import { Overlay } from './Overlay';
import { MercariBrandForm } from '../schema/mercariBrand';
import { DebouncedInput } from './DebouncedInput';
import { faBinoculars } from '@fortawesome/pro-solid-svg-icons';
import { ignore } from '../schema/Controls/ignore';
import { IconButton } from './IconButton';

const fallbackData = <T extends RowData>() => [] as T[];
export type IReactTableProps<T extends RowData> = {
    collection: string;
    sort?: string[];
    columns: ColumnDef<T, unknown>[];
};

export function CreateModal({ open, toggle, FormComponent }: { toggle: () => void; open: boolean; FormComponent: React.FunctionComponent<{ toggle: () => void }> }) {
    // const onSubmit = useCallback((ev: React.FormEvent) => {
    //     ev.preventDefault();
    //     ev.stopPropagation();
    // }, []);
    return (
        <Overlay toggle={toggle} open={open}>
            <FormComponent toggle={toggle} />
        </Overlay>
    );
}
export function ReactTable<T extends RowData & Document>(props: IReactTableProps<T>) {
    useWhyDidYouUpdate('ReactTable', props);
    const { columns } = props;
    const rerender = useReducer(() => ({}), [])[1];
    const data = Route.useLoaderData() as T[];

    const table = useReactTable<T>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableGlobalFilter: true,
        enableRowSelection: true,
        enableColumnFilters: true,
        enableHiding: true,
        enableColumnResizing: true,
        enableSorting: true,
        filterFns: {
            fuzzy: fuzzyFilter
        },
        sortingFns: {
            fuzzy: fuzzySort
        },
        getSortedRowModel: getSortedRowModel(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        autoResetPageIndex: false,
        autoResetExpanded: false,
        getRowId: (originalRow) => (originalRow as any)?._id?.toHexString()
    });
    const [open, toggle] = useToggler();
    const [createModalOpen, toggleCreateModal] = useToggler();
    return (
        <div className='p-2'>
            <div className='flex flex-between items-center tracking-tight leading-snug text-sm px-1.5 py-1 shadow-md border border-black/60 shadow-black'>
                <div className='grid grid-cols-8 w-full justify-evenly'>
                    <CreateModal open={createModalOpen} toggle={toggleCreateModal} FormComponent={MercariBrandForm} />
                    <Button className='flex items-center justify-center' color='sky' controlSize='small' click={() => toggle}>
                        Change Column Visibility
                    </Button>
                    <Button className='flex items-center justify-center' color='sky' controlSize='small' click={toggleCreateModal}>
                        Create New
                    </Button>
                </div>
                <div className='flex flex-row'>
                    <IconButton icon={faBinoculars} color='sky' controlSize='small' interactions='hover,focus,disable' click={ignore} />
                    <DebouncedInput name='global-filter' value={table.getState().globalFilter} onChange={table.setGlobalFilter} onContextMenu={(ev: React.MouseEvent) => table.setGlobalFilter(null)} title='The global filter value.'  className='text-base font-medium' />
                    
                </div>
            </div>
            <div className='flex w-full h-full'>
                <ColumnsModal table={table} open={open} toggle={toggle} />
                <table>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <div
                                                className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                                                onClick={header.column.getToggleSortingHandler()}
                                                title={
                                                    header.column.getCanSort() ?
                                                        header.column.getNextSortingOrder() === 'asc' ?
                                                            'Sort ascending'
                                                        : header.column.getNextSortingOrder() === 'desc' ?
                                                            'Sort descending'
                                                        :   'Clear sort'
                                                    :   undefined
                                                }>
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {{
                                                    asc: ' 🔼',
                                                    desc: ' 🔽'
                                                }[header.column.getIsSorted() as string] ?? null}
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table
                            .getRowModel()
                            .rows.slice(0, 10)
                            .map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
                <ReactTableActionButtons
                    getSelectedRowModel={table.getSelectedRowModel}
                    hasNextPage={table.getCanNextPage}
                    hasPreviousPage={table.getCanPreviousPage}
                    nextPage={table.nextPage}
                    previousPage={table.previousPage}
                    pageCount={table.getPageCount()}
                    pageIndex={table.getState().pagination.pageIndex}
                    pageSize={table.getState().pagination.pageSize}
                    rerender={rerender}
                    rowSelection={{}}
                    setPageIndex={table.setPageIndex}
                    setPageSize={table.setPageSize}
                    totalRows={table.getPrePaginationRowModel().rows.length}
                />
                {/* <div>{table.getRowModel().rows.length.toLocaleString()} Rows</div>
                <div>
                    <button onClick={() => rerender()}>Force Rerender</button>
                </div> */}
            </div>
        </div>
    );
}
