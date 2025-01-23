import { ColumnDef, RowData, flexRender, getCoreRowModel, getFacetedMinMaxValues, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
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

const fallbackData = <T extends RowData>() => [] as T[];
export type IReactTableProps<T extends RowData> = {
    collection: string;
    sort?: string[];
    columns: ColumnDef<T, unknown>[];
};

export function ReactTable<T extends RowData & Document>(props: IReactTableProps<T>) {
    useWhyDidYouUpdate('ReactTable', props);
    const { columns } = props;
    const rerender = useReducer(() => ({}), [])[1];
    const data = Route.useLoaderData() as T[];     

    const table = useReactTable<T>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
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
        getRowId: (originalRow) => (originalRow as any)?._id?.toHexString()
    });
    const [open, toggle] = useToggler();
    return (
        <div className='p-2'>
            <div className='flex w-full justify-evenly'>
                <Button color='sky' controlSize='medium' click={() => toggle}>
                    Change Column Visibility
                </Button>
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
                    nextPage={() => table.nextPage}
                    previousPage={() => table.previousPage}
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
