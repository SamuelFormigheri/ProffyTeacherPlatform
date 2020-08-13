import knex from 'knex';
import Knex from 'knex';

//Quais alterações a realizar no db
export async function up(knex: Knex){
    return knex.schema.createTable('db_login_profile', table => {
        table.increments('id').primary();
        table.string('avatar');
        table.string('bio');
        table.string('whatsapp');

        table.integer('fk_login_id').notNullable().references('id').inTable('db_login')
        .onUpdate('CASCADE').onDelete('CASCADE');
    });
}

//Rollback em caso de erro
export async function down(knex: Knex){
    return knex.schema.dropTable('db_login_profile');
}