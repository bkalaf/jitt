import dayjs from 'dayjs';
import col from './col';
import { GenericInsertForm } from './Controls/GenericInsertForm';
import $to from './xforms/$to';
import { IMercariTaxonomy } from './xforms/mercariTaxonomy';
import { ColumnDef, createColumnHelper, RowData } from '@tanstack/react-table';
import { FieldValues } from 'react-hook-form';
import { OIDElement } from './Controls/OIDElement';
import { TextElement, IntegerElement, DateElement } from './Controls/TextElement';

const helper = createColumnHelper<IMercariTaxonomy>();

export function mercariTaxonomyConvert({ _id, owner, regex, timestamp, category, subCategory, subSubCategory }: IMercariTaxonomy) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner),
        timestamp: $to.date(timestamp as any),
        category,
        subCategory,
        subSubCategory,
        regex: $to.optString(regex)
    }
}

export const columns: ColumnDef<IMercariTaxonomy, any>[] = [
    col._id(),
    col.str('category.selector', { header: 'Category Selector' }),
    col.str('category.name', { header: 'Category Name' }),
    col.str('subCategory.selector', { header: 'SubCategory Selector' }),
    col.str('subCategory.name', { header: 'SubCategory Name' }),
    col.str('subSubCategory.selector', { header: 'SubSubCategory Selector' }),
    col.str('subSubCategory.name', { header: 'SubSubCategory Name' }),
    col.str('regex'),
    col.date('timestamp'),
    col.str('name')
];

const InsertForm = GenericInsertForm('mercariBrand');

export function MercariTaxonomyInsertForm<T extends FieldValues & RowData>({ toggle, values }: { toggle: () => void; values?: T }) {
    return (
        <InsertForm toggle={toggle} values={values}>
            <OIDElement name='_id' label='OID' />
            <TextElement name='category.name' label='Category Name' required />
            <TextElement name='category.selector' label='Category Selector' required />
            <TextElement name='subCategory.name' label='SubCategory Name' required />
            <TextElement name='subCategory.selector' label='SubCategory Selector' required />
            <TextElement name='subSubCategory.name' label='SubSubCategory Name' required />
            <TextElement name='subSubCategory.selector' label='SubSubCategory Selector' required />
            <TextElement name='regex' label='RegEx' />
            <DateElement name='timestamp' label='Timestamp' />
        </InsertForm>
    );
}
