import IController from './IController';
import {Request, Response} from 'express';
import MovieService from '../services/MovieService';

/**
 * Movies Controller
 */
class MovieController implements IController {
    /**
     * Http request GET
     * @param {Request} request
     * @param {Response} response
     */
    index(request: Request, response: Response): void {
        response.status(200);
        response.json({title: 'get movie'});
    }

    /**
     * Http request GET one
     * @param {Request} request
     * @param {Response} response
     */
    async retrieve(request: Request, response: Response): Promise<void> {
        const movie = await MovieService.getById(parseInt(request.params.id));
        response.status(movie !== null ? 200 : 404);
        response.json(movie);
    }

    /**
     * Http request POST
     * @param {Request} request
     * @param {Response} response
     */
    create(request: Request, response: Response): void {
        response.status(200);
        response.json({title: 'post movie'});
    }

    /**
     * Http request PUT
     * @param {Request} request
     * @param {Response} response
     */
    update(request: Request, response: Response): void {
        response.status(200);
        response.json({title: 'put movie'});
    }

    /**
     * Http request DELETE
     * @param {Request} request
     * @param {Response} response
     */
    destroy(request: Request, response: Response): void {
        response.status(200);
        response.json({title: 'delete movie'});
    }
}

export default new MovieController();
