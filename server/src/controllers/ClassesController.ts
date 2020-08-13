import { Request, Response } from 'express';
import db from '../database/connection';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';

interface IScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController{
    async ListClasses(req:Request, res:Response){
        const filters = req.query;

        const subject = filters.subject as string;
        const time = filters.time as string;
        const week_day = filters.week_day as string;

        if(!filters.week_day || !filters.subject || !filters.time){
            return res.status(400).json({
                error: "Missing needed filters."
            });
        }

        const timeInMinutes = convertHoursToMinutes(time);
        
        const classes = await db('db_classes')
            .whereExists(function(){
                this.select('db_classes_schedule.*')
                    .from('db_classes_schedule')
                    .whereRaw('`db_classes_schedule`.`fk_class_id` = `db_classes`.`id`')
                    .whereRaw('`db_classes_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`db_classes_schedule`.`from` <= ??',[timeInMinutes])
                    .whereRaw('`db_classes_schedule`.`to` > ??',[timeInMinutes])
            })
            .where('db_classes.subject', '=', subject)
            .join('db_users', 'db_classes.fk_user_id', '=', 'db_users.id')
            .select(['db_classes.*','db_users.*']);

        return res.json(classes);
    }
    async CreateClass(req: Request,res: Response){
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;
    
        //Fazer o rollback das operações caso retornou erro em alguma inserção
        const trx = await db.transaction();
    
        try
        {
            const insertedUsersId = await trx('db_users').insert({
                name: name,
                avatar: avatar,
                whatsapp: whatsapp,
                bio: bio
            });
        
            const fk_user_id = insertedUsersId[0];
        
            const insertedClassesId = await trx('db_classes').insert({
                subject: subject,
                cost: cost,
                fk_user_id: fk_user_id
            });
        
            const fk_class_id = insertedClassesId[0];
        
            const classSchedule = schedule.map((item: IScheduleItem) => {
                return{
                    week_day: item.week_day,
                    from: convertHoursToMinutes(item.from),
                    to: convertHoursToMinutes(item.to),
                    fk_class_id: fk_class_id
                };
            });
        
            await trx('db_classes_schedule').insert(classSchedule);
            
            await trx.commit();
        
            return res.status(201).send();
        }
        catch(err)
        {
            await trx.rollback();
            return res.status(400).json({
                error: err
            })
        }
    
    }
}