import Realm, { BSON } from 'realm';
import { IAuction, IBarcode, IHashTag, IProduct, IProductImage, IShipping, ISku, Opt } from '../../types';
import { ItemConditions, ItemDispositions, Shippers } from '../enums';
import { barcodeFormatter } from '../../util/barcodeFormatter';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { generateTitle } from '../../components/table/controls/titleGenerator';
import { convertFromGrams, convertToPoundsOunces } from '../../components/table/controls/convertFromGrams';
import { CURRENT_SHIPPING_VERSION, getShipping, getShippingById } from '../enums/shippingRates';
import { runTransaction } from '../../util/runTransaction';
import { Barcode } from './barcode';
import { distinctByOID } from '../../common/array/distinct';
import { EntityBase } from './EntityBase';
import { getInitFor } from './getInitFor';

export class Sku extends EntityBase<ISku> implements ISku {
    hashTags: DBList<IHashTag>;
    get allHashTags(): IHashTag[] {
        return distinctByOID([...(this.product?.allHashTags ?? []), ...(this.hashTags ?? [])]);
    }
    get hasDraft(): boolean {
        return this.linkingObjects('draft', 'sku').length > 0;
    }
    static barcodeGenerator: () => string;
    static init(): InitValue<ISku> {
        return {
            _id: new BSON.ObjectId(),
            defects: [],
            hashTags: [],
            skus: [],
            disposition: 'not-listed',
            condition: 'like-new',
            packingPercent: 1.3,
            quantity: 1
        };
    }
    static addFromProduct(product: IProduct): ISku {
        const sku = getInitFor(Sku as any, 'sku');
        const item = sku();
        item.product = product;
        let result: ISku = undefined as any as ISku;
        const func = () => {
            result = Sku.localRealm.create<ISku>('sku', item);
            Sku.update(result);
        };
        runTransaction(Sku.localRealm, func);
        return result;
    }
    addBarcode(this: ISku, generator: () => string): ISku {
        const bc = Barcode.createFromFullUPC(generator());
        const func = () => {
            this.skus = [...(this.skus ?? []), bc] as any;
        };
        runTransaction(Sku.localRealm, func);
        return this;
    }
    _id: BSON.ObjectId;
    auction?: Opt<IAuction>;
    condition?: Opt<ItemConditions>;
    defects: DBList<string>;
    disposition?: Opt<ItemDispositions>;
    packingPercent?: Opt<number>;
    product?: Opt<IProduct>;
    quantity?: Opt<number>;
    skus: DBList<IBarcode> & [IBarcode, ...IBarcode[]];
    shipping?: Opt<IShipping>;
    static labelProperty = 'disposition';
    static schema: Realm.ObjectSchema = {
        name: schemaName($.sku()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            auction: $.auction(),
            condition: $.string.opt,
            defects: $.string.list,
            disposition: $.string.opt,
            packingPercent: $.double.opt,
            product: $.product(),
            quantity: $.int.opt,
            skus: $.barcode.list,
            shipping: $.shipping(),
            hashTags: $.hashTag.list
        }
    };
    get getIsMediaMail(): boolean {
        return this.product?.flags.includes('isMediaMail') ?? false;
    }
    get getShipping(): IShipping {
        const { pounds, ounces } = { pounds: 0, ounces: 0, ...(convertFromGrams(this.getShipWeight ?? 0) ?? {}) };
        const wght = pounds + ounces / 16;
        const { id } = { id: undefined, ...(getShipping(wght ?? 0, this.getIsMediaMail) ?? {}) };
        return { id: id ?? 0, version: CURRENT_SHIPPING_VERSION };
    }
    get getShipWeight(): Opt<number> {
        if (this.product == null) throw new Error('no product');
        const { weight } = this.product;
        const shipWeight = (weight ?? 0) * (this.packingPercent ?? 1.0);
        return shipWeight;
    }
    get getCarrier(): Opt<Shippers> {
        return getShippingById(this.shipping?.id)?.carrier;
    }
    get getShippingPrice(): Opt<number> {
        return getShippingById(this.shipping?.id)?.price;
    }
    get getMaxWeight(): Opt<{ pounds: number; ounces: number }> {
        return convertToPoundsOunces(getShippingById(this.shipping?.id)?.weight);
    }
    get getFolder(): string {
        return barcodeFormatter(this.skus[0]);
    }
    get getProductImages(): Realm.Types.LinkingObjects<IProductImage, 'sku'> {
        return this.linkingObjects(schemaName($.productImage()), 'sku') as any;
    }
    get getTitle(): Opt<string> {
        return this.product?.title;
    }
    static update(item: ISku): ISku {
        const realm = Sku.localRealm;
        const func = () => {
            const title = generateTitle(item);
            if (item.product == null) throw new Error('no product');
            if (!item.product.overrideTitle) {
                item.product.title = title;
            }
            const shipping = item.getShipping;
            item.shipping = shipping;
            if (Sku.barcodeGenerator == null) {
                throw new Error('barcode generator null on Sku');
            }
            if (item.skus == null || item.skus.length === 0) {
                console.info('adding sku to Sku');
                item.addBarcode(Sku.barcodeGenerator);
            }
        };
        runTransaction(realm, func);
        return item;
    }
}
