import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './routes/api.routes';
import { connectDB, disconnectDB } from './config/database';
import { handleApplicationErrors } from './middlewares/error-handling.middleware';

dotenv.config();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use('/api', apiRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
