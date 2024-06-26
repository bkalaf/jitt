// import { MRT_Row, MRT_TableOptions } from 'material-react-table';
// import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import { FormContainer, useForm } from 'react-hook-form-mui';
// import { camelToProper } from '../../../common/text';
// import { useCallback } from 'react';
// import { useInitial } from '../../../hooks/useInitial';
// import { useMutation } from '@tanstack/react-query';
// import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
// import { useLocalRealm } from '../../../hooks/useLocalRealm';
// import { runTransaction } from '../../../util/runTransaction';
// import { is } from '../../../common/is';
// import { useConvertListItem } from '../../../hooks/useConvertListItem';

// export function createRenderCreateRowDialogContentNestedForList(objectType: string, list: ListBack<any>, row: MRT_Row<any>, name: string) {
//     return function RenderCreateRowDialogContentNestedForList({ table, internalEditComponents }: Parameters<Exclude<MRT_TableOptions<any>['renderCreateRowDialogContent'], undefined>>[0]) {
//         const initializer = useInitial(objectType);
//         const formContext = useForm({
//             defaultValues: () => Promise.resolve(initializer())
//         });
//         const convert = useConvertListItem(objectType);
//         const invalidator = useInvalidateCollection();
//         const { mutate: insertMutate } = useMutation({
//             onSuccess: () => invalidator(),
//             mutationFn: (values: any) => {
//                 console.log(`original values`, values);
//                 const converted = convert(values);
//                 console.log(`converted values`, converted);
//                 const nextList = (list ?? []).push(converted);
//                 if (is.dbList(list)) {
//                     return Promise.resolve();
//                 }
//                 row.original[name] = nextList;
//                 return Promise.resolve();
//             }
//         });
//         const realm = useLocalRealm();
//         const submitClick = useCallback(
//             (ev: React.MouseEvent<HTMLButtonElement>) => {
//                 ev.preventDefault();
//                 ev.stopPropagation();
//                 const func = () => formContext.handleSubmit((values: any) => insertMutate(values))(ev);
//                 runTransaction(realm, func);
//             },
//             [formContext, insertMutate, realm]
//         );
//         const cancelClick = useCallback(() => table.setCreatingRow(null), [table]);
//         const resetClick = useCallback(() => formContext.reset(), [formContext]);

//         return (
//             <FormContainer context={formContext}>
//                 <DialogTitle>{camelToProper(objectType)}</DialogTitle>
//                 <DialogContent>{internalEditComponents}</DialogContent>
//                 <DialogActions>
//                     <Box className='flex w-full justify-end gap-x-2'>
//                         <Button className='inline-flex' type='button' color='metal' onClick={cancelClick}>
//                             Cancel
//                         </Button>
//                         <Button className='inline-flex' type='button' color='metal' onClick={resetClick}>
//                             Reset
//                         </Button>
//                         <Button className='inline-flex' type='button' color='metal' onClick={submitClick}>
//                             Submit
//                         </Button>
//                     </Box>
//                 </DialogActions>
//             </FormContainer>
//         );
//     };
// }
