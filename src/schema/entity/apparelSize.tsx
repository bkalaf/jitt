import { IApparelSize } from '../../types';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
import { $ } from '../$';

export class ApparelSize extends EntityBase<IApparelSize> implements IApparelSize {
    get selector(): string {
        return ['#itemSizeId-', this.index.toFixed(0)].join('');
    }
    index: number;
    key: string;
    text: string;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.apparelSize()),
        embedded: true,
        properties: {
            index: $.int(),
            key: $.string(),
            text: $.string()
        }
    };
    static liComponent: ListItemCellComponent<IApparelSize> = (value?: IApparelSize) => () => (value == null ? '' : value.text);
    static update(item: IApparelSize): IApparelSize {
        return item;
    }
    static init(): InitValue<IApparelSize> {
        return {
            index: 999,
            key: '',
            text: ''
        };
    }
}
