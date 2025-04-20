use('jitt-data');

for (const element of db.getCollection('barcode').find().toArray()) {
    db.getCollection('barcode').updateOne({ _id: element._id }, { $set: { barcodes: element.barcodes.map(x => ({ ...x, barcodeType: (x.barcodeType).toUpperCase().replace('-', '') }))}})
}