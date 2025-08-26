import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import health from './routes/health.js';
import locations from './routes/locations.js';
import assetTypes from './routes/assetTypes.js';
import assetRoutes from './routes/assets.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/health', health);
app.use('/api/locations', locations);
app.use('/api/asset-types', assetTypes);
app.use('/api/assets', assetRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

