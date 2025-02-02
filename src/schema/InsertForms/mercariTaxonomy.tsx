import { RowData } from '@tanstack/react-table';
import { FieldValues } from 'react-hook-form';
import { OIDElement } from '../Controls/OIDElement';
import { TextElement, DateElement } from '../Controls/TextElement';

export function InsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement name='_id' label='OID' />
            <TextElement name='name' label='Name' />
            <DateElement name='timestamp' label='Timestamp' />
            <TextElement name='category.name' label='Category Name' required />
            <TextElement name='category.selector' label='Category Selector' required pattern={/^#/} />
            <TextElement name='subCategory.name' label='SubCategory Name' required />
            <TextElement name='subCategory.selector' label='SubCategory Selector' required pattern={/^#/} />
            <TextElement name='subSubCategory.name' label='SubSubCategory Name' required />
            <TextElement name='subSubCategory.selector' label='SubSubCategory Selector' required pattern={/^#/} />
        </>
    );
}
