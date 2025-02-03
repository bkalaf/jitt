import { RowData, RowModel } from '@tanstack/react-table';
import { useCallback } from 'react';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';

export type IReactTableActionButtons<T extends RowData> = {
    getSelectedRowModel: () => RowModel<T>;
    hasNextPage: () => boolean;
    hasPreviousPage: () => boolean;
    nextPage: () => void;
    previousPage: () => void;
    pageCount: number;
    pageIndex: number;
    pageSize: number;
    rerender: () => void;
    rowSelection: Object;
    setPageIndex: (index: number) => void;
    setPageSize: (pageSize: PageSize) => void;
    totalRows: number;
};

export type PageSize = 10 | 25 | 50 | 100 | 250;

export type PaginationActionButtonsProps<T extends RowData> = Pick<IReactTableActionButtons<T>, 'hasNextPage' | 'hasPreviousPage' | 'nextPage' | 'previousPage' | 'pageSize' | 'pageIndex' | 'setPageSize' | 'setPageIndex' | 'pageCount' | 'totalRows'>;

export type PageSizeAndRowCountRowsProps<T extends RowData> = Pick<PaginationActionButtonsProps<T>, 'pageSize' | 'totalRows' | 'setPageSize'>;

export function PageSizeAndRowCountRows<T extends RowData>(props: PageSizeAndRowCountRowsProps<T>) {
    useWhyDidYouUpdate('PageSizeAndRowCount', props);
    const { pageSize, setPageSize, totalRows } = props;
    const onChange = useCallback(
        (ev: React.ChangeEvent<HTMLSelectElement>) => {
            setPageSize(
                ev.target.value ?
                    typeof ev.target.value === 'string' ?
                        (parseInt(ev.target.value, 10) as PageSize)
                    :   ev.target.value
                :   25
            );
        },
        [setPageSize]
    );
    return (
        <>
            <div className='flex flex-row w-full justify-end items-center'>
                <label className='inline-flex text-base font-bold'>
                    Page Size:
                    <select className='inline-flex w-35 p-0.5 rounded-lg shadow-black shadow-inner' onChange={onChange} value={pageSize}>
                        {[10, 25, 50, 100, 250].map((value) => (
                            <option key={value.toFixed(0)} value={value.toFixed(0)}>
                                Show {value.toFixed(0)}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className='flex w-full justify-end items-center'>
                <strong>Total Rows: </strong>
                {totalRows.toFixed(0)}
            </div>
        </>
    );
}
