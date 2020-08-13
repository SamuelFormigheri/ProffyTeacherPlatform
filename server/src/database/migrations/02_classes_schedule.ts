import knex from 'knex';
import Knex from 'knex';

//Quais alterações a realizar no db
export async function up(knex: Knex){
    return knex.schema.createTable('db_classes_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('fk_class_id').notNullable().references('id').inTable('db_classes')
        .onUpdate('CASCADE').onDelete('CASCADE');
    });
}

//Rollback em caso de erro
export async function down(knex: Knex){
    return knex.schema.dropTable('db_classes_schedule');
}
