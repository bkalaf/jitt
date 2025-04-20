import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import selfStorageRoutes from './routes/selfStorage';
import mercariBrandRoutes from './routes/mercariBrand';
import brandRoutes from './routes/brand';
import facilityRoutes from './routes/facility';
import productLineRoutes from './routes/productLine';
import mercariTaxonomyRoutes from './routes/mercariTaxonomy';
import hashTagRoutes from './routes/hashTag';
import mediaCollectionRoutes from './routes/mediaCollection';
import barcodeGeneratorRoutes from './routes/barcodeGenerator';
import barcodeRoutes from './routes/barcode';
import personRoutes from './routes/person';
import dropdownRoutes from './routes/dropdown';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/data/v1/brand', brandRoutes);
app.use('/api/data/v1/facility', facilityRoutes);
app.use('/api/data/v1/hashTag', hashTagRoutes);
app.use('/api/data/v1/mercariBrand', mercariBrandRoutes);
app.use('/api/data/v1/mercariTaxonomy', mercariTaxonomyRoutes);
app.use('/api/data/v1/selfStorage', selfStorageRoutes);
app.use('/api/data/v1/productLine', productLineRoutes);
app.use('/api/data/v1/mediaCollection', mediaCollectionRoutes);
app.use('/api/data/v1/barcodeGenerator', barcodeGeneratorRoutes);
app.use('/api/data/v1/barcode', barcodeRoutes);
app.use('/api/data/v1/person', personRoutes);
app.use('/api/data/v1/dropdown', dropdownRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('JITT Server');
});
app.listen(port, () => console.log(`Server is running on port: ${port}.`));
