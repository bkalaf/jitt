import { RowData, Table } from '@tanstack/react-table';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { Overlay } from './Overlay';


export function ColumnsModal<T extends RowData>(props: { table: Table<T>; open: boolean; toggle: () => void; }) {
    useWhyDidYouUpdate('ColumnsModal', props);
    const { table, toggle, open } = props;
    return (
        <Overlay toggle={toggle} open={open}>
            <div className='p-2 flex border border-black shadow-inner shadow-black rounded'>
                <div className='px-1 border-b border-black'>
                    <label className='text-base font-bold'>
                        <input type='checkbox' checked={table.getIsAllColumnsVisible()} onChange={table.getToggleAllColumnsVisibilityHandler()} className='mr-1' />
                        Toggle All
                    </label>
                </div>
                {table.getAllLeafColumns().map((column) => {
                    return (
                        <div className='px-1' key={column.id}>
                            <label className='text-base font-bold'>
                                <input type='checkbox' checked={column.getIsVisible()} onChange={column.getToggleVisibilityHandler()} className='mr-1' />
                                {column.id}
                            </label>
                        </div>
                    );
                })}
            </div>
        </Overlay>
    );
}
