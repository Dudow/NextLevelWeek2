import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()
        table.integer('week_day').notNullable()
        table.integer('from').notNullable()
        table.integer('to').notNullable()
        //RELACIONAMENTO
        table.integer('class_id').notNullable()
            .references('id').inTable('classes') //Referencia id dentro de CLASSSES
            .onDelete('CASCADE') //Se a classe for deletada, as aulas também serão
            .onUpdate('CASCADE')
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule')
}