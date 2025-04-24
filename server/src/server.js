import dotenv from 'dotenv';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files from client/dist
app.use(express.static(path.join(__dirname, '../../../client/dist')));

// ✅ Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Use imported routes
app.use(routes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));