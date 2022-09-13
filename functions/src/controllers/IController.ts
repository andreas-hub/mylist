import {Request, Response} from 'express';

interface IController {
    index(request: Request, response: Response): void;
    retrieve(request: Request, response: Response): void;
    create(request: Request, response: Response): void;
    update(request: Request, response: Response): void;
    destroy(request: Request, response: Response): void;
}

export default IController;
