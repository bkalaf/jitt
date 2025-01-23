import { RowData, RowModel } from '@tanstack/react-table';
import { faLeft, faLeftToLine, faRight, faRightToLine, faSquare0, faSquare1, faSquare2, faSquare3, faSquare4, faSquare5, faSquare6, faSquare7, faSquare8, faSquare9 } from '@fortawesome/pro-solid-svg-icons';
import { useCallback } from 'react';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { IconButton } from './IconButton';

export type PageSize = 10 | 25 | 50 | 100 | 250;

export type IReactTableActionButtons<T extends RowData> = {
    getSelectedRowModel: () => RowModel<T>;
    hasNextPage: () => boolean;
    hasPreviousPage: () => boolean;
    nextPage: () => () => void;
    previousPage: () => () => void;
    pageCount: number;
    pageIndex: number;
    pageSize: number;
    rerender: () => void;
    rowSelection: Object;
    setPageIndex: (index: number) => void;
    setPageSize: (pageSize: PageSize) => void;
    totalRows: number;
};

const icons = {
    firstPage: faLeftToLine,
    lastPage: faRightToLine,
    nextPage: faRight,
    previousPage: faLeft,
    '0': faSquare0,
    '1': faSquare1,
    '2': faSquare2,
    '3': faSquare3,
    '4': faSquare4,
    '5': faSquare5,
    '6': faSquare6,
    '7': faSquare7,
    '8': faSquare8,
    '9': faSquare9
};

export function ReactTableActionButtons<T extends RowData>(props: IReactTableActionButtons<T>) {
    useWhyDidYouUpdate('ReactTableActionButtons', props);
    const { getSelectedRowModel, hasNextPage, hasPreviousPage, pageCount, pageIndex, pageSize, nextPage, previousPage, rerender, rowSelection, setPageIndex, setPageSize, totalRows } = props;
    const toFirstPage = useCallback(() => () => setPageIndex(0), [setPageIndex]);
    const toLastPage = useCallback(() => () => setPageIndex(pageCount - 1), [pageCount, setPageIndex]);
    return (
        <>
            <div className='flex items-center gap-2'>
                <IconButton className='border rounded p-1' icon={icons.firstPage} click={toFirstPage} disable={hasPreviousPage} color='blue' controlSize='small' />
                <IconButton className='border rounded p-1' icon={icons.previousPage} click={previousPage} disable={hasPreviousPage} color='sky' controlSize='small' />
                <span className='text-sm'>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageCount}
                    </strong>{' '}
                    | Go to page:
                </span>
                <span className='flex items-center gap-1'>
                    <input
                        type='number'
                        min={1}
                        max={pageCount}
                        defaultValue={pageIndex + 1}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                            const page = ev.target.value ? Number(ev.target.value) - 1 : 0;
                            setPageIndex(page);
                        }}
                        className='border p-1 w-16'
                    />
                </span>
                <IconButton className='border rounded p-1' icon={icons.nextPage} click={nextPage} disable={hasNextPage} color='slate' controlSize='small' />
                <IconButton className='border rounded p-1' icon={icons.lastPage} click={toLastPage} disable={hasNextPage} color='slate' controlSize='small' />
                <select
                    className='border p-1 rounded'
                    value={pageSize}
                    onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
                        setPageSize(Number(ev.target.value) as PageSize);
                    }}>
                    {[10, 25, 50, 100, 250].map((value) => (
                        <option key={value.toFixed(0)} value={value.toFixed(0)}>
                            Show {value.toFixed(0)}
                        </option>
                    ))}
                </select>
                <span className='ml-2 text-sm font-bold'>{totalRows} Rows</span>
            </div>
        </>
    );
}
