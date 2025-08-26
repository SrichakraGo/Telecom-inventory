import health from './routes/health.js';
import locations from './routes/locations.js';
import assetTypes from './routes/assetTypes.js';
import assetRoutes from './routes/assets.js';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path'; // Import path module
import { fileURLToPath } from 'url';

// ... (rest of your imports)

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the client's build directory
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use('/api/health', health);
app.use('/api/locations', locations);
app.use('/api/asset-types', assetTypes);
app.use('/api/assets', assetRoutes);

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


