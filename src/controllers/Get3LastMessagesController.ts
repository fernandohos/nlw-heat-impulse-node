import {Request, response, Response} from 'express';
import {Get3LastMessagesService} from '../services/Get3LastMessagesService';

export class Get3LastMessagesController {
    async handle(req: Request, res: Response) {

        const service = new Get3LastMessagesService();

        const result = await service.execute();

        return res.json(result);
        
    }
}