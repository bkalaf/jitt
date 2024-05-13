import dayjs from 'dayjs';
import { IAttribute, IBarcode, ICustomItemField, IHashTag, IHashTagUsage, IIncludedItem, IMadeOfSection } from '../types';
import { barcodeFormatter } from '../schema/entity/barcodeFormatter';


export const liComponents: Record<string, ListItemCellComponent<any>> = {
    string: ((value?: string) => () => value ?? '') as ListItemCellComponent<string>,
    int: ((value?: number) => () => value?.toFixed(0) ?? '') as ListItemCellComponent<number>,
    double: ((value?: number) => () => value?.toString() ?? '') as ListItemCellComponent<number>,
    date: ((value?: Date) => () => value == null ? '' : dayjs(value).format('YYYY/MM/DD')) as ListItemCellComponent<Date>,
    hashTagUsage: ((value?: IHashTagUsage) => () => value == null ? '' : [dayjs(value.from).format('YYYY/MM/DD'), value.count.toFixed(0)].join(': ')),
    hashTag: ((value?: IHashTag) => () => value?.name ?? '') as ListItemCellComponent<IHashTag>,
    attribute: ((value?: IAttribute) => () => value == null ? '' : [value.path, value.value].join(' == ')) as ListItemCellComponent<IAttribute>,
    includedItem: ((value?: IIncludedItem) => () => value == null ? '' : [value.qty.toFixed(0), value.name].join('x ')),
    customItemField: ((value?: ICustomItemField) => () => value == null ? '' : [value.name, value.id, value.value].join(':: ')),
    barcode: ((value?: IBarcode) => () => value == null ? '' : barcodeFormatter(value)),
    madeOfSection: ((value?: IMadeOfSection) => () => value == null ? '' : [value.name, JSON.stringify(value.section)].join(': '))
};