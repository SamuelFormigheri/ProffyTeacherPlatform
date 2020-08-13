import knex from 'knex';
import Knex from 'knex';

//Quais alterações a realizar no db
export async function up(knex: Knex){
    return knex.schema.createTable('db_connections', table => {
        table.increments('id').primary();

        table.integer('fk_user_id').notNullable().references('id').inTable('db_users')
        .onUpdate('CASCADE').onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable();
    });
}

//Rollback em caso de erro
export async function down(knex: Knex){
    return knex.schema.dropTable('db_connections');
}
