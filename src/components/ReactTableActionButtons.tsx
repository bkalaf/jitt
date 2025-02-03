import { RowData, RowModel } from '@tanstack/react-table';
import { faLeft, faLeftToLine, faRight, faRightToLine, faSquare0, faSquare1, faSquare2, faSquare3, faSquare4, faSquare5, faSquare6, faSquare7, faSquare8, faSquare9 } from '@fortawesome/pro-solid-svg-icons';
import { useCallback } from 'react';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { IconButton } from './IconButton';
import { IReactTableActionButtons, PageSizeAndRowCountRows, PaginationActionButtonsProps } from './PageSizeAndRowCountRows';



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




export function PaginationActionButtons<T extends RowData>(props: PaginationActionButtonsProps<T>) {
    useWhyDidYouUpdate('PaginationActionButtons', props);
    const { hasNextPage, hasPreviousPage, setPageIndex, setPageSize, nextPage, previousPage, pageIndex, pageSize, pageCount } = props;
    const goToFirstPage = useCallback(() => setPageIndex(0), [setPageIndex]);
    const goToLastPage = useCallback(() => setPageIndex(pageCount - 1), [pageCount, setPageIndex]);
    const pageIndexOnChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            setPageIndex(parseInt(ev.target.value, 10));
        },
        [setPageIndex]
    );
    return (
        <div className='flex flex-row gap-1 items-center place-self-end'>
            <IconButton className='flex border rounded p-0.5' click={goToFirstPage} controlSize='small' color='blue' interactions='hover,focus,disable' disabled={!hasPreviousPage()} icon={icons.firstPage} />
            <IconButton className='flex border rounded p-0.5' click={previousPage} controlSize='small' color='blue' interactions='hover,focus,disable' disabled={!hasPreviousPage()} icon={icons.previousPage} />
            <span className='flex flex-col items-center justify-center text-sm divide-y-4 divide-black'>
                <div className='flex w-full items-center justify-center'>
                    Page
                    <strong className='mx-1.5'>{(pageIndex + 1).toFixed(0)}</strong>
                    of
                    <strong className='mx-1.5'>{pageCount.toFixed(0)}</strong>
                </div>
                <div className='flex w-full items-center justify-center'>
                    Go to page:
                    <input type='number' min={1} max={pageCount} className='border rounded-lg shadow-inner shadow-black w-50 flex px-1 py-0.5 ml-1.5' onChange={pageIndexOnChange} step={1} />
                </div>
            </span>
            <IconButton className='flex border rounded p-0.5' click={nextPage} controlSize='small' color='blue' interactions='hover,focus,disable' disabled={!hasNextPage()} icon={icons.nextPage} />
            <IconButton className='flex border rounded p-0.5' click={goToLastPage} controlSize='small' color='blue' interactions='hover,focus,disable' disabled={!hasNextPage()} icon={icons.lastPage} />
        </div>
    );
}

export function ReactTableActionButtons<T extends RowData>(props: IReactTableActionButtons<T>) {
    useWhyDidYouUpdate('ReactTableActionButtons', props);
    const { getSelectedRowModel, hasNextPage, hasPreviousPage, pageCount, pageIndex, pageSize, nextPage, previousPage, rerender, rowSelection, setPageIndex, setPageSize, totalRows } = props;
    return (
        <div className='flex flex-col gap-y-1.5'>
            <PaginationActionButtons
                hasNextPage={hasNextPage}
                hasPreviousPage={hasPreviousPage}
                nextPage={nextPage}
                previousPage={previousPage}
                pageSize={pageSize}
                pageIndex={pageIndex}
                setPageSize={setPageSize}
                setPageIndex={setPageIndex}
                pageCount={pageCount}
                totalRows={totalRows}
            />
            <PageSizeAndRowCountRows pageSize={pageSize} setPageSize={setPageSize} totalRows={totalRows} />
        </div>
    );
}
