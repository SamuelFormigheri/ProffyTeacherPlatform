import knex from 'knex';
import Knex from 'knex';

//Quais alterações a realizar no db
export async function up(knex: Knex){
    return knex.schema.createTable('db_classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        table.integer('fk_user_id').notNullable().references('id').inTable('db_users')
        .onUpdate('CASCADE').onDelete('CASCADE');
    });
}

//Rollback em caso de erro
export async function down(knex: Knex){
    return knex.schema.dropTable('db_classes');
}

