import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Gemini SDK with User-Agent header for telemetry
const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `You are a helpful AI assistant for Anas's "AKN Services" portfolio website. 
Anas is a professional WordPress Developer with 3 years of experience specializing in Elementor, GeneratePress, and Astra.
Your goal is to answer questions about the developer's services and portfolio projects offered on the site.
Keep responses concise, professional, and friendly. Always encourage the user to reach out via the contact form if they have specific project needs.`;

async function generateContentWithRetry(contents: any[], config: any) {
  const models = ['gemini-3.8-flash', 'gemini-flash-latest'];
  let lastError: any = null;

  for (const model of models) {
    try {
      return await ai.models.generateContent({
        model,
        contents,
        config,
      });
    } catch (err: any) {
      lastError = err;
      const isTemporary = err?.message?.includes('503') || err?.status === 503 || err?.message?.includes('429');
      if (isTemporary) {
        console.warn(`Model ${model} unavailable (temporary spike), trying fallback...`);
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}

async function generateContentStreamWithRetry(contents: any[], config: any) {
  const models = ['gemini-3.8-flash', 'gemini-flash-latest'];
  let lastError: any = null;

  for (const model of models) {
    try {
      return await ai.models.generateContentStream({
        model,
        contents,
        config,
      });
    } catch (err: any) {
      lastError = err;
      const isTemporary = err?.message?.includes('503') || err?.status === 503 || err?.message?.includes('429');
      if (isTemporary) {
        console.warn(`Stream model ${model} unavailable (temporary spike), trying fallback...`);
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasApiKey: !!apiKey,
    keyLength: apiKey ? apiKey.length : 0,
  });
});

// Regular JSON Chat Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (!apiKey) {
      res.status(503).json({ error: 'Gemini API key is not configured.' });
      return;
    }

    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const msg of history) {
        if (msg.role === 'user' && msg.text) {
          contents.push({ role: 'user', parts: [{ text: msg.text }] });
        } else if ((msg.role === 'ai' || msg.role === 'model') && msg.text) {
          contents.push({ role: 'model', parts: [{ text: msg.text }] });
        }
      }
    }
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await generateContentWithRetry(contents, {
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const text = response.text || "I'm sorry, I couldn't generate a response.";
    res.json({ text });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({
      error: error?.message || 'Failed to process chat message with Gemini API.',
    });
  }
});

// Streaming Chat Endpoint via Server-Sent Events (SSE)
app.post('/api/chat/stream', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (!apiKey) {
      res.status(503).json({ error: 'Gemini API key is not configured.' });
      return;
    }

    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const msg of history) {
        if (msg.role === 'user' && msg.text) {
          contents.push({ role: 'user', parts: [{ text: msg.text }] });
        } else if ((msg.role === 'ai' || msg.role === 'model') && msg.text) {
          contents.push({ role: 'model', parts: [{ text: msg.text }] });
        }
      }
    }
    contents.push({ role: 'user', parts: [{ text: message }] });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = await generateContentStreamWithRetry(contents, {
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    for await (const chunk of stream) {
      const text = chunk.text || '';
      if (text) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    }
    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error: any) {
    console.error('Gemini Stream Error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error?.message || 'Streaming failed' });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Stream interrupted' })}\n\n`);
      res.end();
    }
  }
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
