import { Request, Response, response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    async ListConnections(req: Request,res: Response){
        const totalConnections = await db('db_connections').count('* as total');

        const { total } = totalConnections[0];

        return res.json({ total });
    }
    async CreateConnection(req: Request,res: Response){
        const { fk_user_id } = req.body;

        await db('db_connections').insert({
            fk_user_id: fk_user_id
        });

        return res.status(201).send();
    }
}