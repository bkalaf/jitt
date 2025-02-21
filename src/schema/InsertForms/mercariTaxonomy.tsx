import { RowData } from '@tanstack/react-table';
import { FieldValues } from 'react-hook-form';
import { OIDElement } from '../../components/Controls/OIDElement';
import { DateControl } from '../../components/Controls/DateControl';
import { TextControl } from '../../components/Controls/TextControl';

export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextControl name='name' label='Name' />
            <DateControl name='timestamp' label='Timestamp' />
            <TextControl name='category.name' label='Category Name' required />
            <TextControl name='category.selector' label='Category Selector' required pattern={/^#/} />
            <TextControl name='subCategory.name' label='SubCategory Name' required />
            <TextControl name='subCategory.selector' label='SubCategory Selector' required pattern={/^#/} />
            <TextControl name='subSubCategory.name' label='SubSubCategory Name' required />
            <TextControl name='subSubCategory.selector' label='SubSubCategory Selector' required pattern={/^#/} />
        </>
    );
}
