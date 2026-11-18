import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Mount Vite middleware in dev or serve static files in production
const distPath = path.resolve(__dirname, 'dist');
const hasDist = fs.existsSync(path.resolve(distPath, 'index.html'));
const isProd = process.env.NODE_ENV === 'production' || (hasDist && process.env.npm_lifecycle_event !== 'dev');

if (!isProd) {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(distPath));
  app.use((_req: Request, res: Response) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
