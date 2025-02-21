import { faPenAltSlash, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { useParams, useRouteContext } from '@tanstack/react-router';
import { ColumnHelper } from '@tanstack/react-table';
import { ObjectId } from 'mongodb';
import { useCallback, useMemo } from 'react';
import { IconButton } from '../../components/IconButton';
import { useInvalidate } from '../../hooks/useInvalidate';
import { GenericEditForm } from '../../components/Controls/GenericEditForm';
import { Overlay } from '../../components/Overlay';

export const actions = function <T>(helper: ColumnHelper<T>) {
    return helper.display({
        id: 'rt-row-actions',
        size: 90,
        header: 'Row Actions',
        cell: function RowActions({ row, table }) {
            const { FormControls } = table.options.meta!;
            const { closeEditRow, setEditingRow, getIsEditing } = table;
            const { getIsRowEditing } = row;
            const { collection } = useParams({ from: '/data/$collection/' });

            const Modal = useMemo(() => GenericEditForm(collection, row.id, row.original as any), [collection, row.id, row.original]);
            const invalidate = useInvalidate(collection);
            const { getMongo } = useRouteContext({ from: '/data/$collection/' });
            const { mutate } = useMutation({
                mutationFn: async (ID: string) => {
                    const mongo = await getMongo();
                    await mongo.collection(collection).deleteOne({ _id: new ObjectId(ID) });
                },
                onSuccess: async () => {
                    await invalidate();
                    closeEditRow();
                },
                onError: async (err) => {
                    console.error(err.name);
                    console.error(err.message);
                    console.error(err.stack);
                }
            });
            const deleteClick = useCallback(
                (ev: React.SyntheticEvent) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                    mutate(row.id);
                },
                [mutate, row.id]
            );
            const editClick = useCallback(
                (ev: React.SyntheticEvent) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                    setEditingRow(row.id);
                },
                [row.id, setEditingRow]
            );
            return (
                <div className='grid grid-cols-2 gap-2-x'>
                    <IconButton controlSize='small' iconSize='small' color='slate' click={editClick} icon={faPenAltSlash} className='flex mx-auto' title='Edit row.' />
                    {getIsRowEditing() && (
                        <Overlay toggle={closeEditRow} open={getIsEditing()}>
                            <Modal toggle={closeEditRow}>
                                <FormControls toggle={closeEditRow} />
                            </Modal>
                        </Overlay>
                    )}
                    <IconButton controlSize='small' iconSize='small' color='slate' click={deleteClick} icon={faTrashCan} className='flex mx-auto' title='Delete row.' />
                </div>
            );
        }
    });
};
