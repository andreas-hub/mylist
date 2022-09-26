import * as express from 'express';
import MovieController from './controllers/MovieController';

// eslint-disable-next-line new-cap
const router = express.Router();

/**
 * Middleware
 */
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    req.header('content-type');
    next();
});

/**
 * Routes
 */

// Movie Resource
router.get('/movie', MovieController.index);
router.get('/movie/:id', MovieController.retrieve);
router.post('/movie', MovieController.create);
router.put('/movie/:id', MovieController.update);
router.delete('/movie/:id', MovieController.destroy);

export default router;
