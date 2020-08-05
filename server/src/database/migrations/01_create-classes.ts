import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()
        //RELACIONAMENTO
        table.integer('user_id').notNullable()
            .references('id').inTable('users') //Referencia id dentro de users
            .onDelete('CASCADE') //Se o professor for deletado, as aulas também serão
            .onUpdate('CASCADE')
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes')
}