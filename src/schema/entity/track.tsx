import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import { ITrack } from '../../types';
import { MRT_ColumnDef } from 'material-react-table';
import { trackColumns } from '../columns/track';

export class Track extends EntityBase<ITrack> implements ITrack {
    static columns: MRT_ColumnDef<ITrack>[] = trackColumns();
    duration: Opt<IMeasure<MusicDurationUnitsOfMeasure>>;
    feat: DBList<string>;
    index: Opt<number>;
    name: Opt<string>;
    runtimeSecs: Opt<number>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.track()),
        embedded: true,
        properties: {
            feat: $.string.list,
            index: $.int(),
            name: $.string.opt,
            duration: $.musicDurationMeasure()
        }
    };
    static update(item: ITrack): ITrack {
        return item;
    }
    static stringify = (value?: ITrack) => () => (value == null ? undefined : [value.index?.toFixed(0), value.name, value.feat ? `feat: ${value.feat.join(', ')}` : undefined].filter((x) => x != null).join('- '));
    static liComponent = Track.stringify;
    static init(): InitValue<ITrack> {
        return {
            feat: []
        };
    }
}
