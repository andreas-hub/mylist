/**
 * Init .env
 */
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Init Database
 */
// import DatabaseService from './services/DatabaseService';
// DatabaseService.initialize().catch(console.error);

/**
 * Init API
 */
import * as functions from 'firebase-functions';
import * as express from 'express';
import router from './routes';
const app = express();
app.use('/api', router);

export const server = functions.https.onRequest(app);
