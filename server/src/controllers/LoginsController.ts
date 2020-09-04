import { Request, Response } from 'express';
import db from '../database/connection';

const bcrypt = require('bcrypt');

export default class LoginsController {
    async GetUser(req: Request,res: Response){
        const {
            email,
            password
        } = req.body;

        const loginUser = await db('db_login')
            .where('email', '=', [email]);

        try{
            if(await bcrypt.compare(password, loginUser[0].password)){
                delete loginUser[0].password;
                return res.json(loginUser[0]);
            }else{
                return res.status(400).json({
                    error: "Incorrect Password"
                });
            }
        }catch(e){
            return res.status(400).json({
                error: "User not Found"
            });
        }
    }
    async CreateUser(req: Request,res: Response){        
        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        const hashedPassword = await bcrypt.hash(password,10);
        
        //Fazer o rollback das operações caso retornou erro em alguma inserção
        const trx = await db.transaction();

        try
        {
            const insertedLoginId = await trx('db_login').insert({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: hashedPassword
            });

            const fk_login_id = insertedLoginId[0];

            await trx('db_login_profile').insert({
                avatar: null,
                bio: null,
                whatsapp: null,
                fk_login_id: fk_login_id
            });

            await trx.commit();
        
            return res.status(201).send();
        }
        catch(err)
        {
            await trx.rollback();
            return res.status(400).json({
                error: err
            });
        }
    }
    async GetProfile(req: Request,res: Response){
        const {
            fk_login_id
        } = req.body;
        
        try{    
            const loginUser = await db('db_login_profile')
                .where('fk_login_id', '=', [fk_login_id]);
            return res.json(loginUser);        
        }catch(e){
            return res.status(400).json({
                error: "Profile not Found"
            });
        }
    }
    async UpdateProfile(req: Request,res: Response){
        const {
            avatar,
            bio,
            whatsapp,
            fk_login_id
        } = req.body;

        //Fazer o rollback das operações caso retornou erro em alguma inserção
        const trx = await db.transaction();

        try
        {
            await trx('db_login_profile').where('fk_login_id', '=', [fk_login_id]).update({
                avatar: avatar,
                bio: bio,
                whatsapp: whatsapp
            });

            await trx.commit();
        
            return res.status(201).send();
        }
        catch(err)
        {
            await trx.rollback();
            return res.status(400).json({
                error: err
            });
        }
    }
}