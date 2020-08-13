import knex from 'knex';
import Knex from 'knex';

//Quais alterações a realizar no db
export async function up(knex: Knex){
    return knex.schema.createTable('db_users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

//Rollback em caso de erro
export async function down(knex: Knex){
    return knex.schema.dropTable('db_users');
}

