import { createRow, MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box, Button, Slide } from '@mui/material';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { useSnackbar } from 'notistack';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { useEffectiveCollection } from '../../../hooks/useEffectiveCollection';
import { useBarcodeGenerator } from '../../../hooks/useBarcodeGenerator';
import { useCallback } from 'react';
import { runTransaction } from '../../../util/runTransaction';
import { IBin, IProduct, ISku } from '../../../types';
import { Sku } from '../../../schema/entity/sku';
import { Draft } from '../../../schema/entity/draft';
import { useToaster } from '../../../hooks/useToaster';
import { BSON } from 'realm';
import { useUpdateEntity } from '../../../hooks/useUpdateEntity';
import { CreateProductFromUPCBtn } from './CreateProductFromUPCBtn';
import { RunApiSearchBtn } from './RunAPISearchBtn';
import { MarkReadyToList } from './MarkReadyToList';
import { useGetAreNoRowsSelected } from '../../../hooks/useGetAreNoRowsSelected';

export function createRenderTopToolbarCustomActions<T extends MRT_RowData>(init: () => T, resetSettings: () => void) {
    return function RenderTopToolbarCustomActions({ table }: Parameters<Exclude<MRT_TableOptions<T>['renderTopToolbarCustomActions'], undefined>>[0]) {
        const route = useEffectiveCollection();
        const updater = useUpdateEntity(route);
        const db = useLocalRealm();
        const invalidate = useInvalidateCollection();
        const { enqueueSnackbar } = useSnackbar();
        const { nextBin, nextSku } = useBarcodeGenerator();
        const noneSelected = useGetAreNoRowsSelected(table)
        const onNextBarcode = useCallback(() => {
            const selected = table.getSelectedRowModel().rows.map((x) => x.original as any as IBin | ISku);
            const next = route === 'sku' ? nextSku : nextBin;
            const innerFunc = (item: IBin | ISku) => {
                if ('product' in item) {
                    item.addBarcode(next);
                    return;
                }
                (item as IBin).addBarcode(next);
            };
            const func = () => {
                selected.map(innerFunc);
            };
            runTransaction(db, func);
            invalidate();
            table.setRowSelection({});
        }, [db, invalidate, nextBin, nextSku, route, table]);
        const onNewSku = useCallback(() => {
            const selected = table.getSelectedRowModel().rows.map((x) => x.original as any as IProduct);
            const func = () => {
                selected.map((product) => Sku.addFromProduct(product as IProduct));
            };
            runTransaction(db, func);
            table.setRowSelection({});
        }, [db, table]);
        const { msg: draftCreatedMsg } = useToaster((id: BSON.ObjectId) => `Draft created: ${id.toHexString()}`);
        const notOnlyOneSelected = !(table.getSelectedRowModel().rows.length === 1);
        const onNewDraft = useCallback(() => {
            const selected = table.getSelectedRowModel().rows.map((x) => x.original as any as ISku)[0];
            const { _id } = Draft.createDraft(db, selected);
            draftCreatedMsg(_id);
            table.setRowSelection({});
        }, [db, draftCreatedMsg, table]);
        const exportDraft = useCallback(() => {
            const selected = table.getSelectedRowModel().rows.map((x) => x.original as any as Draft);
            for (const element of selected) {
                element.output();
            }
        }, [table]);
        // console.log('getSelectedRowModel', table.getSelectedRowModel());
        return (
            <Box className='flex gap-x-1'>
                <Button color='secondary' variant='contained' onClick={resetSettings}>
                    Reset
                </Button>
                <Button color='secondary' variant='contained' onClick={() => table.setCreatingRow(createRow(table, init()))}>
                    Create
                </Button>
                <Button
                    color='secondary'
                    variant='contained'
                    disabled={table.getSelectedRowModel().rows.length === 0}
                    className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'
                    onClick={() => {
                        if (db == null) throw new Error('no db');
                        const rowSelected = table.getSelectedRowModel().rows.map((x) => x.original) as RealmObj<T>[];
                        const results = [];
                        for (const iterator of rowSelected) {
                            results.push(updater(iterator));
                        }
                        enqueueSnackbar(`Updated ${results.length} rows.`, { preventDuplicate: true, variant: 'success', TransitionComponent: Slide });
                        table.setRowSelection({});
                        invalidate();
                    }}>
                    Update
                </Button>
                {['sku', 'bin'].includes(route) && (
                    <Button color='secondary' variant='contained' onClick={onNextBarcode} disabled={noneSelected()} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
                        Add Barcode
                    </Button>
                )}
                {route === 'product' && (
                    <Button color='secondary' variant='contained' onClick={onNewSku} disabled={noneSelected()} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
                        Add SKU
                    </Button>
                )}
                {route === 'sku' && (
                    <Button color='secondary' variant='contained' onClick={onNewDraft} disabled={notOnlyOneSelected} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
                        Add Draft
                    </Button>
                )}
                {route === 'draft' && (
                    <Button color='secondary' variant='contained' onClick={exportDraft} disabled={noneSelected()} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
                        Export Draft
                    </Button>
                )}
                <CreateProductFromUPCBtn />
                <RunApiSearchBtn />
                <MarkReadyToList table={table as any} />
            </Box>
        );
    };
}
