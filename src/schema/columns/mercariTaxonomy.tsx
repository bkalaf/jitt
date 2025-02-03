import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { IMercariTaxonomy } from '../mercariTaxonomy';
import { col } from '../col';

const helper = createColumnHelper<IMercariTaxonomy>();

export const columns: ColumnDef<IMercariTaxonomy, any>[] = [
    col.actions(helper),
    col._id(),
    col.str('name'),
    helper.group({
        header: 'Category',
        columns: [col.str('category.name'), col.str('category.selector')]
    }),
    helper.group({
        header: 'SubCategory',
        columns: [col.str('subCategory.name'), col.str('subCategory.selector')]
    }),
    helper.group({
        header: 'SubSubCategory',
        columns: [col.str('subSubCategory.name'), col.str('subSubCategory.selector')]
    }),
    col.str('regex', { header: 'RegEx' }),
    col.date('timestamp')
];
