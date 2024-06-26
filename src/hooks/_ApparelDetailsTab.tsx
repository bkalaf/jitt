// import { Button } from '@mui/material';
// import { IProduct } from '../types';
// import { useLocalRealm } from './useLocalRealm';
// import { FormProvider, useForm } from 'react-hook-form';
// import { runTransaction } from '../util/runTransaction';
// import { apparelDetails } from '../schema/entity/details/apparelDetails';
// import { createEditComponent } from 'src/components/controls/createEditComponent';
// import { useConvert } from './useConvert';
// import { Realm } from 'realm';
// import { Grid, Item } from './Grid';

// export function ApparelDetailsTab(props: { data: IProduct; original: IProduct }) {
//     const columns = apparelDetails;
//     const { original } = props;
//     const formContext = useForm({
//         defaultValues: (original as any).toJSON()
//     });
//     const convert = useConvert('object', 'product');
//     const db = useLocalRealm();
//     return (
//         <FormProvider {...formContext}>
//             <Grid columns={4} gap={2} className='w-screen'>

//                 <Item className='flex col-span-4 col-start-1 w-full justify-center'>
//                     <Button
//                         type='button'
//                         variant='contained'
//                         color='metal'
//                         disabled={!formContext.formState.isDirty}
//                         onClick={formContext.handleSubmit((data) => {
//                             console.info('data', data);
//                             const converted = convert(data);
//                             console.info('converted', converted);
//                             const func = () => {
//                                 db.create('product', converted, Realm.UpdateMode.Modified);
//                             };
//                             runTransaction(db, func);
//                         })}>
//                         Submit
//                     </Button>
//                 </Item>
//             </Grid>
//         </FormProvider>
//     );
// }
