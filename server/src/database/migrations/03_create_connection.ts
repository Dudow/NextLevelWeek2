import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary()
        //RELACIONAMENTO
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users') //Referencia id dentro de CLASSSES
            .onDelete('CASCADE') //Se a classe for deletada, as aulas também serão
            .onUpdate('CASCADE')
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections')
}