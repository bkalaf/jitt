import { flexRender, Row, RowData } from '@tanstack/react-table';
import { useElementID } from '../hooks/useElementID';
import { IconButton } from './IconButton';
import { faPenAltSlash } from '@fortawesome/pro-solid-svg-icons';
import { useParams, useRouteContext } from '@tanstack/react-router';
import { useInvalidate } from '../hooks/useInvalidate';
import { useMutation } from '@tanstack/react-query';
import { ObjectId } from 'mongodb';
import { useCallback } from 'react';

export function ReactTableRow<T extends RowData & Document>({ row, setEditingRow }: { row: Row<T>; setEditingRow: (x: T) => void }) {    
    return (
        <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
        </tr>
    );
}
