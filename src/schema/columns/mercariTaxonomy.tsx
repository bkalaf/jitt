import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IMercariTaxonomy } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';
import { mercariCategoryColumns } from './mercariCategory';
import { $depend } from './$depend';

export const h = createMRTColumnHelper<IMercariTaxonomy>();
export const helper = col(h);

export const mercariTaxonomyColumns: MRT_ColumnDef<IMercariTaxonomy>[] = [
    helper.PK(),
    helper.string()('fullname', 'Full Name', undefined, { maxLength: 250, readonly: true }),
    helper.date()('timestamp', 'Timestamp', { dateType: 'past' }),
    helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag'),
    groupCol(h, 'Category', mercariCategoryColumns, 'category', 'bg-blue-700', 'text-white')(),
    groupCol(h, 'SubCategory', mercariCategoryColumns, 'subCategory', 'bg-red-700', 'text-white')($depend.notNilOrEmpty('category.name' as any, true)),
    groupCol(h, 'SubSubCategory', mercariCategoryColumns, 'subSubCategory', 'bg-orange-700', 'text-white')($depend.notNilOrEmpty('subCategory.name' as any, true))
] as MRT_ColumnDef<IMercariTaxonomy>[];
